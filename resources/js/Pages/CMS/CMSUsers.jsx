import React from "react";
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSUsers = () => {
  const formFields = [
    { id: 'username', placeholder: 'Username' },
    { id: 'email', placeholder: 'Email' }
  ];

  const usersData = [
    { username: "User 1", email: "email1@example.com" },
    { username: "User 2", email: "email2@example.com" },
    { username: "User 3", email: "email3@example.com" },
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

  return (
    <CMSLayout title="Users">
      <CMSForm fields={formFields} />
      <CMSTable columns={columns} data={usersData} actions={actions} />
    </CMSLayout>
  );
};

export default CMSUsers;
