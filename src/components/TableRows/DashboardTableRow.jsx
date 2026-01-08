import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const DashboardTableRow = ({ urlData, index, refetch }) => {
  const [copied, setCopied] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { _id, longUrl, shortCode, totalVisit, createdAt } = urlData;
  const shortUrl = `${import.meta.env.VITE_SERVER_URL}/${shortCode}`;
  const dateObj = new Date(createdAt);

  const date = dateObj.toLocaleDateString("en-GB");
  const time = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = async (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this link?"
    );

    if (proceed) {
      try {
        const { data } = await axiosSecure.delete(`/delete-url/${id}`);

        if (data.success) {
          refetch();
          toast.success(data.message || "Deleted successfully!");
        }
      } catch (error) {
        console.error("Delete Error:", error);
        toast.error(error.response?.data?.message || "Could not delete the URL");
      }
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors">
      <td className="py-3 px-6 text-center border-r border-gray-200 font-medium">
        {index}
      </td>
      <td className="py-3 px-6 text-left border-r border-gray-200 font-medium truncate max-w-xs">
        {longUrl}
      </td>
      <td className="py-3 px-6 text-center border-r border-gray-200">
        {shortCode}
      </td>
      <td className="py-3 px-6 flex items-center justify-between gap-3 border-r border-gray-200">
        <span className="text-blue-400 truncate max-w-44">{shortUrl}</span>
        <button
          onClick={handleCopyToClipboard}
          className="flex items-center gap-1 
               text-gray-600 hover:text-blue-600
               bg-gray-100 hover:bg-green-100
               px-3 py-2 rounded-md cursor-pointer transition"
        >
          {copied ? (
            <TiTick className="text-sm" />
          ) : (
            <FaRegCopy className="text-sm" />
          )}
        </button>
      </td>

      <td className="py-3 px-6 text-center border-r border-gray-200 font-bold whitespace-nowrap">
        {totalVisit}
      </td>
      <td className="py-3 px-6 text-center border-r border-gray-200">
        <div className="flex flex-col">
          <span className="font-medium text-gray-800">{date}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left text-xs">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => handleDelete(_id)}
            className="px-4 py-1.5 rounded-lg bg-red-200 text-red-800 font-bold text-xs uppercase cursor-pointer tracking-wider hover:bg-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DashboardTableRow;
