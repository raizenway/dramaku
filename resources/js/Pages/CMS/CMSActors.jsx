import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";
import Pagination from '@/Components/Home/Pagination';

const CMSActors = () => {
  const { actors } = usePage().props;
  const [actorList, setActorList] = useState(actors);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(actorList.length / itemsPerPage);

  const indexOfLastActor = currentPage * itemsPerPage;
  const indexOfFirstActor = indexOfLastActor - itemsPerPage;
  const currentActors = actorList.slice(indexOfFirstActor, indexOfLastActor);

  const actorFields = [
    { id: "name", label: "Actor's Name", type: "text", placeholder: "Actor's Name" },
    { id: "country", label: "Actor's Country", type: "text", placeholder: "Country" },
    { id: "birth_date", label: "Actor's Date of Birth", type: "date" },
    { id: "photo_url", label: "Profile Picture URL", type: "text", placeholder: "Actor's Picture URL" },
  ];

  const columns = [
    { id: 'photo_url', title: "Photo" },  // Column for image
    { id: 'name', title: "Name" },
    { id: 'country', title: "Country" },
    { id: 'birth_date', title: "Date of Birth" },
  ];

  const actions = [
    {
      label: "Rename",
      className: "text-primary hover:underline px-1",
      onClick: (item) => handleRename(item),
    },
    {
      label: "Delete",
      className: "text-red-500 hover:underline px-1",
      onClick: (item) => handleDelete(item),
    },
  ];

  const handleActorSubmit = (formData) => {
    Inertia.post('/cms-actors', formData, {
      onSuccess: (response) => {
        const newActor = response.props.actors.find(a => a.name === formData.name);
        if (newActor) {
          setActorList([...actorList, newActor]);
        }
        alert('Actor created successfully!');
      },
      onError: (errors) => {
        alert('Failed to create actor: ' + errors.name);
      }
    });
  };

  const handleRename = (item) => {
    const newActorName = prompt("Enter new actor name", item.name);
    if (newActorName) {
      Inertia.put(`/cms-actors/${item.id}`, { name: newActorName }, {
        onSuccess: () => {
          setActorList(actorList.map(actor => 
            actor.id === item.id ? { ...actor, name: newActorName } : actor
          ));
          alert('Actor renamed successfully!');
        },
        onError: (errors) => {
          alert('Failed to rename actor: ' + errors.name);
        }
      });
    }
  };

  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this actor?")) {
      Inertia.delete(`/cms-actors/${item.id}`, {
        onSuccess: () => {
          setActorList(actorList.filter(actor => actor.id !== item.id));
          alert('Actor deleted successfully!');
        },
        onError: () => {
          alert('Failed to delete actor.');
        }
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <CMSLayout title="Actors">
      <CMSForm fields={actorFields} onSubmit={handleActorSubmit} />
      
      <CMSTable 
        columns={columns} 
        data={currentActors} 
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

export default CMSActors;
