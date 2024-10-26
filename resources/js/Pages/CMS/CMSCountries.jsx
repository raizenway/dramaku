import React, { useState } from "react";
import { usePage, router as Inertia } from '@inertiajs/react';
import CMSLayout from '@/Components/CMS/CMSLayout';
import CMSForm from '@/Components/CMS/CMSForm';
import CMSTable from '@/Components/CMS/CMSTable';
import Pagination from '@/Components/Home/Pagination';

const CMSCountries = () => {
  const { countries } = usePage().props;
  const [countryList, setCountryList] = useState(countries);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(countryList.length / itemsPerPage);

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountries = countryList.slice(indexOfFirstCountry, indexOfLastCountry);

  const formFields = [
    { id: 'country', placeholder: 'Country Name', label: 'Country' }
  ];

  const columns = [
    { id: 'name', title: 'Country' },
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

  const handleSubmit = (formData) => {
    Inertia.post('/cms-countries', formData, {
      onSuccess: (response) => {
        const newCountry = response.props.countries.find(c => c.name === formData.country);
        if (newCountry) {
          setCountryList([...countryList, newCountry]);
        }
        alert('Country created successfully!');
      },
      onError: (errors) => {
        alert('Failed to create country: ' + errors.country);
      }
    });
  };

  const handleRename = (item) => {
    const newCountryName = prompt("Enter new country name", item.name);
    if (newCountryName) {
      Inertia.put(`/cms-countries/${item.id}`, { country: newCountryName }, {
        onSuccess: () => {
          setCountryList(countryList.map(country => 
            country.id === item.id ? { ...country, name: newCountryName } : country
          ));
          alert('Country renamed successfully!');
        },
        onError: (errors) => {
          alert('Failed to rename country: ' + errors.country);
        }
      });
    }
  };

  const handleDelete = (item) => {
    if (confirm("Are you sure you want to delete this country?")) {
      Inertia.delete(`/cms-countries/${item.id}`, {
        onSuccess: () => {
          setCountryList(countryList.filter(country => country.id !== item.id));
          alert('Country deleted successfully!');
        },
        onError: () => {
          alert('Failed to delete country.');
        }
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <CMSLayout title="Countries">
      <CMSForm fields={formFields} onSubmit={handleSubmit} />
      
      <CMSTable 
        columns={columns} 
        data={currentCountries} 
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

export default CMSCountries;