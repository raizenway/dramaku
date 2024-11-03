import React, { useState } from "react";
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from '@/Components/CMS/CMSLayout';
import CMSForm from '@/Components/CMS/CMSForm';
import CMSTable from '@/Components/CMS/CMSTable';
import Pagination from '@/Components/Home/Pagination';

const CMSGenres = () => {
  const { genres } = usePage().props;
  const [genreList, setGenreList] = useState(genres);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(genreList.length / itemsPerPage);

  const indexOfLastGenre = currentPage * itemsPerPage;
  const indexOfFirstGenre = indexOfLastGenre - itemsPerPage;
  const currentGenres = genreList.slice(indexOfFirstGenre, indexOfLastGenre);

  const formFields = [{ id: 'genre', placeholder: 'Genre Name', label: 'Genre' }];
  const columns = [{ id: 'name', title: 'Genre' }];

  const actions = [
    {
      label: "Edit",
      className: "text-primary hover:underline px-1",
      onClick: (item) => handleRename(item),
    },
    {
      label: "Delete",
      className: "text-red-500 hover:underline px-1",
      onClick: (item) => handleDelete(item),
    },
  ];

  const handleSubmit = (formData) => {
    Inertia.post('/cms-genres', formData, {
      onSuccess: (response) => {
        const newGenre = response.props.genres.find(g => g.name === formData.genre);
        if (newGenre) {
          setGenreList([...genreList, newGenre]);
        }
        alert('Genre created successfully!');
      },
      onError: (errors) => {
        alert('Failed to create genre: ' + errors.genre);
      }
    });
  };

  const handleRename = (item) => {
    const newGenreName = prompt("Enter new genre name", item.name);
    if (newGenreName) {
      Inertia.put(`/cms-genres/${item.id}`, { genre: newGenreName }, {
        onSuccess: () => {
          setGenreList(genreList.map(genre => 
            genre.id === item.id ? { ...genre, name: newGenreName } : genre
          ));
          alert('Genre renamed successfully!');
        },
        onError: (errors) => {
          alert('Failed to rename genre: ' + errors.genre);
        }
      });
    }
  };

  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this genre?")) {
      Inertia.delete(`/cms-genres/${item.id}`, {
        onSuccess: () => {
          setGenreList(genreList.filter(genre => genre.id !== item.id));
          alert('Genre deleted successfully!');
        },
        onError: () => {
          alert('Failed to delete genre.');
        }
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <CMSLayout title="Genres">
      <CMSForm fields={formFields} onSubmit={handleSubmit} />
      
      <CMSTable 
        columns={columns} 
        data={currentGenres} 
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

export default CMSGenres;