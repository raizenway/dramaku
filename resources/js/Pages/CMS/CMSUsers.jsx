import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import Pagination from '@/Components/Home/Pagination';

const CMSUsers = () => {
  const { users } = usePage().props;
  const [userList, setUserList] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(userList.length / itemsPerPage);
  const currentUsers = userList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSuspendToggle = (user) => {
    Inertia.put(`/cms-users/${user.id}/suspend`);
  };
  
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  return (
    <CMSLayout title="Users">
      <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
        <table className="w-full">
          <thead className="text-white bg-dark-2 text-left">
            <tr>
              <th className="p-4 w-1/12 text-center">No.</th>
              <th className="p-4 w-5/12">Username</th>
              <th className="p-4 w-3/12">Email</th>
              <th className="p-4 w-2/12">Role</th>
              <th className="p-4 w-1/12 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-base text-body-color dark:text-dark-6">
            {currentUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">No users available</td>
              </tr>
            ) : (
              currentUsers.map((user, index) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="px-2 py-4 text-center">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="px-2 py-4">{user.username}</td>
                  <td className="px-2 py-4">{user.email}</td>
                  <td className="px-2 py-4 capitalize">{user.role}</td>
                  <td className="px-2 py-4 text-center">
                    {user.role === 'admin' ? (
                      ''
                    ) : (
                      <button
                        onClick={() => handleSuspendToggle(user)}
                        className="text-primary hover:underline px-1"
                      >
                        {user.role === 'suspended' ? 'Unsuspend' : 'Suspend'}
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </CMSLayout>
  );
};

export default CMSUsers;
