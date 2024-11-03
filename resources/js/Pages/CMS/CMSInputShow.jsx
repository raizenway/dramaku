import React, { useState } from "react";
import CMSNav from "@/Components/CMS/CMSNav";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Inertia } from '@inertiajs/inertia';
import { router, usePage } from "@inertiajs/react";


const CMSInputShow = () => {
  const { genres, countries, availability, actors } = usePage().props;

  const [title, setTitle] = useState("");
  const [alternativeTitle, setAlternativeTitle] = useState("");
  const [year, setYear] = useState("");
  const [countryId, setCountryId] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [linkTrailer, setLinkTrailer] = useState("");
  const [awards, setAwards] = useState([""]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  //placeholder photo
  const [photoUrl, setPhotoUrl] = useState("");
  

  // Handler untuk checkbox genres, availability, dan actors
  const handleCheckboxChange = (id, setState, selectedItems) => {
    setState((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Award
  const addAwardField = () => {
      setAwards([...awards, ""]);
  };

  const handleAwardChange = (index, value) => {
      const newAwards = [...awards];
      newAwards[index] = value;
      setAwards(newAwards);
  };

  const removeAwardField = (index) => {
      setAwards(awards.filter((_, i) => i !== index));
  };

  //Pencarian aktor
  const [searchTerm, setSearchTerm] = useState("");
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

    const postData = {
      title,
      alternative_title: alternativeTitle,
      year,
      country_id: countryId,
      synopsis,
      link_trailer: linkTrailer,
      awards,
      genres: selectedGenres,
      availability: selectedPlatforms,
      actors: selectedActors.map((actor) => actor.id),
      photo_url: photoUrl || "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740581/chainsaw-man-vol-12-9781974740581_hr.jpg"
    };
  
    console.log("Data to be sent:", postData);

    router.post("/movies/post", postData);

    setTitle("");
    setAlternativeTitle("");
    setYear("");
    setCountryId("");
    setSynopsis("");
    setLinkTrailer("");
    setAwards([""]);
    setSelectedGenres([]);
    setSelectedPlatforms([]);
    setSelectedActors([]);
    setPhotoUrl("");
    setSearchTerm("");
  };
  
    
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-24">
        <CMSNav />
        <div className="flex-1 flex-wrap p-10 w-1">
          <div className="mb-4">
            <h2 className="text-4xl font-semibold text-dark dark:text-white">
              New Show
            </h2>
            <span className="inline-block h-[2px] w-20 bg-primary" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="flex items-center justify-center bg-gray-200 rounded-lg h-64 mb-4">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="block text-gray-500 text-sm text-center">
                    Upload Show Picture
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <button  className="mt-4 p-2 bg-blue-500 text-white rounded">
                Upload
              </button>
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
                <label>Awards:</label>
                {awards.map((award, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Awards"
                            className="border rounded-lg mb-1 p-2 w-full"
                            value={award}
                            onChange={(e) => handleAwardChange(index, e.target.value)}
                        />
                        <button
                        onClick={() => removeAwardField(index)}
                        type="button"
                        className="text-red-500">
                            Hapus
                        </button>
                    </div>
                    ))}
                      <button
                        onClick={addAwardField}
                        type="button"
                        className="text-blue-500 mt-2">
                          Tambah Award
                      </button>
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
                  <div className="bg-white shadow-md rounded-lg p-2 max-h-40 overflow-y-auto">
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