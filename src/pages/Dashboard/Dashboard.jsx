import React from "react";
import Container from "../../components/Shared/Container";
import DashboardTableRow from "../../components/TableRows/DashboardTableRow";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { Link } from "react-router";
import { IoIosLink } from "react-icons/io";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: urlsData = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Requested Booking", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-urls`);
      return data;
    },
  });

  if (isLoading & loading) return <LoadingSpinner />;

  return (
    <div className="pt-24 pb-8 bg-green-50">
      <Container>
        {urlsData.length > 0 ? (
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-96px)] rounded-xl border border-gray-300">
            <table className="table-auto w-full bg-white">
              <thead className="sticky top-0">
                <tr className="bg-green-500/80 text-white uppercase font-semibold text-xs leading-normal">
                  <th className="py-4 px-6 border-r border-gray-300 text-center">
                    sl no
                  </th>
                  <th className="py-4 px-6 border-r border-gray-300 text-left">
                    Original URL
                  </th>
                  <th className="py-4 px-6 border-r border-gray-300 text-center">
                    Short code
                  </th>
                  <th className="py-4 px-6 border-r border-gray-300 text-center">
                    short URL
                  </th>
                  <th className="py-4 px-6 border-r border-gray-300 text-center">
                    Total visits
                  </th>
                  <th className="py-4 px-6 border-r border-gray-300 text-center">
                    Created date
                  </th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="text-gray-700 text-sm font-light">
                {urlsData &&
                  urlsData.length > 0 &&
                  urlsData.map((urlData, index) => (
                    <DashboardTableRow
                      key={urlData._id}
                      index={index + 1}
                      urlData={urlData}
                      refetch={refetch}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 ">
            <div className="bg-emerald-50 p-6 rounded-full mb-6">
              <IoIosLink className="w-16 h-16 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Short Links Found
            </h2>
            <p className="text-gray-500 mb-8 text-center max-w-lg">
              You haven't created any short links yet. Start shortening your
              long URLs and track their performance!
            </p>
            <Link
              to="/"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-100 active:scale-95"
            >
              + Create Your First Link
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
