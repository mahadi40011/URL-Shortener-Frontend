import React from "react";
import Container from "../../components/Shared/Container";
import DashboardTableRow from "../../components/TableRows/DashboardTableRow";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

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
    <div className="pt-24 pb-8">
      <Container>
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
      </Container>
    </div>
  );
};

export default Dashboard;
