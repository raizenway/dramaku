import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";
import Pagination from '@/Components/Home/Pagination';

const CMSUsers = () => {
  const { users } = usePage().props;
  const [userList, setUserList] = useState(users);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = userList.slice(indexOfFirstUser, indexOfLastUser);

  const formFields = [
    { id: 'username', placeholder: 'Username' },
    { id: 'email', placeholder: 'Email' }
  ];

  const columns = [
    { id: 'username', title: 'Username' },
    { id: 'email', title: 'Email' },
  ];

  const actions = [
    {
      label: "Send First Email",
      className: "text-primary hover:underline px-1",
      onClick: (item) => console.log("Send First Email clicked for", item),
    },
    {
      label: "Rename",
      className: "text-primary hover:underline px-1",
      onClick: (item) => console.log("Rename clicked for", item),
    },
    {
      label: "Delete",
      className: "text-red-500 hover:underline px-1",
      onClick: (item) => console.log("Delete clicked for", item),
    },
  ];

  const handleUserSubmit = (formData) => {
    Inertia.post('/cms-users', formData, {
      onSuccess: (response) => {
        const newUser = response.props.users.find(u => u.username === formData.username);
        if (newUser) {
          setUserList([...userList, newUser]);
        }
        alert('User created successfully!');
      },
      onError: (errors) => {
        alert('Failed to create user: ' + errors.username);
      }
    });
  };

  const handleEdit = (item) => {
    const newUsername = prompt("Enter new username", item.username);
    if (newUsername) {
      Inertia.put(`/cms-users/${item.id}`, { username: newUsername }, {
        onSuccess: () => {
          setUserList(userList.map(user =>
            user.id === item.id ? { ...user, username: newUsername } : user
          ));
          alert('User updated successfully!');
        },
        onError: (errors) => {
          alert('Failed to update user: ' + errors.username);
        }
      });
    }
  };
  
  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this user?")) {
      Inertia.delete(`/cms-users/${item.id}`, {
        onSuccess: () => {
          setUserList(userList.filter(user => user.id !== item.id));
          alert('User deleted successfully!');
        },
        onError: () => {
          alert('Failed to delete user.');
        }
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  return (
    <CMSLayout title="Users">
      <CMSForm fields={formFields} onSubmit={handleUserSubmit} />
      
      <CMSTable 
        columns={columns} 
        data={currentUsers} 
        actions={actions}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </CMSLayout>
  );
};

export default CMSUsers;
