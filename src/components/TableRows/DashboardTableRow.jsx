import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const DashboardTableRow = () => {
  // const handleStatusUpdate = async (newStatus) => {
  //   try {
  //     const { data } = await axiosSecure.patch(`/tickets/${_id}`, {
  //       status: newStatus,
  //     });

  //     if (data.modifiedCount > 0) {
  //       refetch();
  //       toast.success(`Status updated to ${newStatus}`);
  //     }
  //   } catch (err) {
  //     toast.error(err);
  //   }
  // };

  return (
    <tr className="border-b border-gray-200 hover:bg-green-50 transition-colors">
      <td className="py-3 px-6 text-left border-r border-gray-200 font-medium truncate max-w-xs">
        https://drive.google.com/file/d/1r5a7hs0QdoFYptxVmfrwpzBGqfrBFWXX/view
      </td>
      <td className="py-3 px-6 text-center border-r border-gray-200">
        adge34j
      </td>
      <td className="py-3 px-6 flex items-center justify-between gap-3 border-r border-gray-200 ">
        <span className="text-blue-400">https://adge34j</span>
        <button
          className="flex items-center gap-1 
               text-gray-600 hover:text-blue-600
               bg-gray-100 hover:bg-green-100
               px-3 py-2 rounded-md cursor-pointer transition"
        >
          <FaRegCopy className="text-sm" />
        </button>
      </td>

      <td className="py-3 px-6 text-center border-r border-gray-200 font-bold whitespace-nowrap">
        45
      </td>
      <td className="py-3 px-6 text-center border-r border-gray-200">
        2-3-25 20:40
      </td>
      <td className="py-3 px-6 text-left text-xs">
        <div className="flex items-center justify-center gap-3">
          <button className="px-4 py-1.5 rounded-lg bg-red-200 text-red-800 font-bold text-xs uppercase cursor-pointer tracking-wider hover:bg-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DashboardTableRow;
