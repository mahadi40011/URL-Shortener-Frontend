import React from "react";
import Container from "../../components/Shared/Container";
import DashboardTableRow from "../../components/TableRows/DashboardTableRow";

const Dashboard = () => {
  return (
    <div className="pt-24 pb-8">
      <Container>
        <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-96px)] rounded-xl border border-gray-300">
          <table className="table-auto w-full bg-white">
            <thead className="sticky top-0">
              <tr className="bg-green-500/80 text-white uppercase font-semibold text-xs leading-normal">
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
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
              <DashboardTableRow />
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
