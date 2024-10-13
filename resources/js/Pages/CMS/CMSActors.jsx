import React, { useState } from 'react';
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from "@/Components/CMS/CMSLayout";
import CMSForm from "@/Components/CMS/CMSForm";
import CMSTable from "@/Components/CMS/CMSTable";

const CMSActors = () => {
  const { actors } = usePage().props;
  const [actorList, setActorList] = useState(actors);

  const actorFields = [
    { id: "name", label: "Actor's Name", type: "text", placeholder: "Actor's Name" },
    { id: "country_id", label: "Actor's Country", type: "text", placeholder: "Country ID" },
    { id: "birth_date", label: "Actor's Date of Birth", type: "date" },
    { id: "photo_url", label: "Profile Picture URL", type: "text", placeholder: "Actor's Picture URL" },
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

  const actorColumns = [
    { id: 'photo_url', title: 'Photo', width: 'w-2/12' },
    { id: 'name', title: 'Name' },
    { id: 'country.name', title: 'Country' },
    { id: 'birth_date', title: 'Date of Birth' },
];

  return (
    <CMSLayout title="Actors">
      <CMSForm fields={actorFields} onSubmit={handleActorSubmit} />
      <CMSTable columns={actorColumns} data={actorList} actions={[
        {
          label: "Rename",
          className: "text-primary hover:underline px-1",
          onClick: (item) => handleRename(item),
        },
        {
          label: "Delete",
          className: "text-red-500 hover:underline px-1",
          onClick: (item) => handleDelete(item),
        }
      ]} />
    </CMSLayout>
  );
};

export default CMSActors;
