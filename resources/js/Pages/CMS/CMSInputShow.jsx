import React, { useState } from "react";
import CMSNav from "@/Components/CMS/CMSNav";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import imageCompression from 'browser-image-compression';

import { Inertia } from '@inertiajs/inertia';
import { router, usePage } from "@inertiajs/react";


const CMSInputShow = () => {
  const { genres, countries, availability, actors, awards } = usePage().props;

  const [title, setTitle] = useState("");
  const [alternativeTitle, setAlternativeTitle] = useState("");
  const [year, setYear] = useState("");
  const [countryId, setCountryId] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [linkTrailer, setLinkTrailer] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  //placeholder photo
  const [photoUrl, setPhotoUrl] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 2,
          maxWidthOrHeight: 1920,
          useWebWorker: true
        };
        const compressedFile = await imageCompression(file, options);
        const compressedFileUrl = URL.createObjectURL(compressedFile);
        setSelectedImage(compressedFileUrl);
      } catch (error) {
        console.error('Error compressing the image:', error);
      }
    }
  };

  // Handler untuk checkbox genres, availability, dan actors
  const handleCheckboxChange = (id, setState, selectedItems) => {
    setState((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Award
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAwards, setSelectedAwards] = useState([]);

  const filteredAwards = awards.filter((award) =>
    award.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addAward = (award) => {
    if (!selectedAwards.find((a) => a.id === award.id)) {
      setSelectedAwards([...selectedAwards, award]);
    }
    setSearchTerm("");
  };

  const removeAward = (awardId) => {
    setSelectedAwards(selectedAwards.filter((award) => award.id !== awardId));
  };

  //Pencarian aktor
  const [selectedActors, setSelectedActors] = useState([]);

  const filteredActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addActor = (actor) => {
    if (!selectedActors.find((a) => a.id === actor.id)) {
      setSelectedActors([...selectedActors, actor]);
    }
    setSearchTerm("");
  };

  const removeActor = (actorId) => {
    setSelectedActors(selectedActors.filter((actor) => actor.id !== actorId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("alternative_title", alternativeTitle);
    formData.append("year", year);
    formData.append("country_id", countryId);
    formData.append("synopsis", synopsis);
    formData.append("link_trailer", linkTrailer);
    formData.append("awards", JSON.stringify(selectedAwards.map((award) => award.id)));
    formData.append("genres", JSON.stringify(selectedGenres));
    formData.append("availability", JSON.stringify(selectedPlatforms));
    formData.append("actors", JSON.stringify(selectedActors.map((actor) => actor.id)));
    
    if (photoFile) {
        formData.append("photo", photoFile); // Lampirkan file foto jika ada
    }
  
    console.log("Data to be sent:", formData);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    router.post("/movies/post", formData);

    setTitle("");
    setAlternativeTitle("");
    setYear("");
    setCountryId("");
    setSynopsis("");
    setLinkTrailer("");
    setSelectedAwards([]);
    setSelectedGenres([]);
    setSelectedPlatforms([]);
    setSelectedActors([]);
    setPhotoUrl("");
    setSearchTerm("");
  };
  
    
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-20">
        <CMSNav />
        <div className="flex-1 flex-wrap p-10 w-1">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold text-dark dark:text-white">
              New Show
            </h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-[auto,1fr] gap-4">
            <div className="col-span-1 ">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg h-64 mb-4 aspect-[2/3] relative">
                  {/* Tampilkan gambar jika photoUrl ada atau jika image sudah dipilih */}
                  {photoUrl || selectedImage ? (
                    <label htmlFor="file-upload" className="cursor-pointer w-full h-full">
                      <img
                        src={photoUrl ? (photoUrl.startsWith("http") ? photoUrl : `/${photoUrl}`) : selectedImage}
                        alt="Uploaded"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </label>
                  ) : (
                    <label htmlFor="file-upload" className="cursor-pointer absolute z-10 w-full h-full bg-gray-300 flex items-center justify-center rounded-lg">
                        <span className="block text-gray-500 text-sm text-center">
                          Upload Movie Picture
                        </span>
                    </label>
                  )}
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className="border rounded-lg p-2 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Alternative Title"
                    className="border rounded-lg p-2 w-full"
                    value={alternativeTitle}
                    onChange={(e) => setAlternativeTitle(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 my-4">
                  <input
                    type="number"
                    placeholder="Year"
                    className="border rounded-lg p-2 w-full"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <select
                    id="country"
                    className="border rounded-lg p-2 w-full"
                    value={countryId}
                    onChange={(e) => setCountryId(e.target.value)}
                  >
                    <option disabled value="">
                      Select Country
                    </option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  className="border rounded-lg p-2 w-full my-4"
                  rows={5}
                  placeholder="Synopsis"
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                />
              </div>
              <div className="flex-col col-span-3">
                <input
                  type="text"
                  placeholder="Link Trailer"
                  className="border rounded-lg mb-2 p-2 w-full"
                  value={linkTrailer}
                  onChange={(e) => setLinkTrailer(e.target.value)}
                />
                {/* Input pencarian award */}
                <div className="my-4">
                  <h3 className="font-bold">Add Award</h3>
                  <input
                    type="text"
                    placeholder="Search Award"
                    className="border rounded-lg p-2 w-full my-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="bg-white rounded-lg max-h-40 overflow-y-auto">
                    {searchTerm &&
                      filteredAwards.map((award) => (
                        <div
                          key={award.id}
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addAward(award)}
                        >
                          {award.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Menampilkan award */}
              <div className="text-black">
                  {selectedAwards.map((award) => (
                    <div
                      key={award.id}
                      className="flex items-center bg-gray-100 rounded-lg p-2 mb-2"
                    >
                      <span className="ml-4 flex-1">{award.name}</span>
                      <button
                        className="text-red-500"
                        onClick={() => removeAward(award.id)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              
              {/* Checkbox */}
              <div className="col-span-3">
              <div className="my-4">
                  <h3 className="font-bold">Add Availability</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 mt-2">
                  {availability.map((availability) => (
                  <label key={availability.id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={availability.id}
                      onChange={() =>
                        handleCheckboxChange(availability.id, setSelectedPlatforms, selectedPlatforms)
                      }
                      checked={selectedPlatforms.includes(availability.id)}
                    />
                    <span>{availability.name}</span>
                  </label>
                ))}
                  </div>
                </div>

                <div className="my-4">
                  <h3 className="font-bold">Add Genres</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 mt-2">
                  {genres.map((genre) => (
                    <label key={genre.id} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={genre.id}
                        onChange={() =>
                          handleCheckboxChange(genre.id, setSelectedGenres, selectedGenres)
                        }
                        checked={selectedGenres.includes(genre.id)}
                      />
                      <span>{genre.name}</span>
                    </label>
                  ))}
                  </div>
                </div>
                {/* Input pencarian aktor */}
                <div className="my-4">
                  <h3 className="font-bold">Add Actors (Up to 9)</h3>
                  <input
                    type="text"
                    placeholder="Search Actor Names"
                    className="border rounded-lg p-2 w-full my-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="bg-white rounded-lg p-2 max-h-40 overflow-y-auto">
                    {searchTerm &&
                      filteredActors.map((actor) => (
                        <div
                          key={actor.id}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addActor(actor)}
                        >
                          <img
                              src={actor.photo_url || "https://via.placeholder.com/150"}
                              alt={actor.name}
                              className="w-8 h-12 object-cover rounded-md"
                          />
                          {actor.name}
                        </div>
                      ))}
                  </div>
                </div>
                    
                {/* Menampilkan aktor yang ditambahkan dalam bentuk card */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 my-4">
                  {selectedActors.map((actor) => (
                    <div
                      key={actor.id}
                      className="flex items-center bg-gray-100 rounded-lg p-2"
                    >
                      <img
                        src={actor.photo_url || "https://via.placeholder.com/150"}
                        alt={actor.name}
                        className="w-16 h-24 object-cover rounded-md"
                      />
                      <span className="ml-4 flex-1">{actor.name}</span>
                      <button
                        className="text-red-500"
                        onClick={() => removeActor(actor.id)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>

            <button
              type="submit"
              className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
            >
              Submit
            </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CMSInputShow;
