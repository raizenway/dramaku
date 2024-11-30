import React, { useState } from "react";
import CMSNav from "@/Components/CMS/CMSNav";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { router, usePage } from "@inertiajs/react";

export const handleImageChange = (event, setSelectedImage, setPhotoFile) => {
  const file = event.target.files[0];
  if (file) {
    setSelectedImage(URL.createObjectURL(file));
    setPhotoFile(file);
  }
};

export const handleCheckboxChange = (id, setState, selectedItems) => {
  setState((prev) =>
    prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
  );
};

export const addAward = (award, selectedAwards, setSelectedAwards, setSearchTerm) => {
  if (!selectedAwards.find((a) => a.id === award.id)) {
    setSelectedAwards([...selectedAwards, award]);
  }
  setSearchTerm("");
};

export const removeAward = (awardId, selectedAwards, setSelectedAwards) => {
  setSelectedAwards(selectedAwards.filter((award) => award.id !== awardId));
};

export const addActor = (actor, selectedActors, setSelectedActors, setSearchTerm) => {
  if (!selectedActors.find((a) => a.id === actor.id)) {
    setSelectedActors([...selectedActors, actor]);
  }
  setSearchTerm("");
};

export const removeActor = (actorId, selectedActors, setSelectedActors) => {
  setSelectedActors(selectedActors.filter((actor) => actor.id !== actorId));
};

export const createFormData = (state) => {
  const formData = new FormData();
  formData.append("title", state.title);
  formData.append("alternative_title", state.alternativeTitle);
  formData.append("year", state.year);
  formData.append("country_id", state.countryId);
  formData.append("synopsis", state.synopsis);
  formData.append("link_trailer", state.linkTrailer);
  formData.append("awards", JSON.stringify(state.selectedAwards.map((award) => award.id)));
  formData.append("genres", JSON.stringify(state.selectedGenres));
  formData.append("availability", JSON.stringify(state.selectedPlatforms));
  formData.append("actors", JSON.stringify(state.selectedActors.map((actor) => actor.id)));
  if (state.photoFile) {
    formData.append("photo", state.photoFile);
  }
  return formData;
};

export const resetForm = (setState) => {
  setState({
    title: "",
    alternativeTitle: "",
    year: "",
    countryId: "",
    synopsis: "",
    linkTrailer: "",
    selectedAwards: [],
    selectedGenres: [],
    selectedPlatforms: [],
    selectedActors: [],
    photoUrl: "",
    searchTerm: "",
  });
};

const CMSInputShow = () => {
  const { genres, countries, availability, actors, awards } = usePage().props;

  const [state, setState] = useState({
    title: "",
    alternativeTitle: "",
    year: "",
    countryId: "",
    synopsis: "",
    linkTrailer: "",
    selectedGenres: [],
    selectedPlatforms: [],
    photoUrl: "",
    photoFile: null,
    selectedImage: null,
    searchTerm: "",
    selectedAwards: [],
    selectedActors: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = createFormData(state);
    console.log("Data to be sent:", formData);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    router.post("/movies/post", formData);
    resetForm(setState);
  };

  const filteredAwards = awards.filter((award) =>
    award.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const filteredActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

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
                  {state.photoUrl || state.selectedImage ? (
                    <label htmlFor="file-upload" className="cursor-pointer w-full h-full">
                      <img
                        src={state.photoUrl ? (state.photoUrl.startsWith("http") ? state.photoUrl : `/${state.photoUrl}`) : state.selectedImage}
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
                    onChange={(e) => handleImageChange(e, setState, state)}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className="border rounded-lg p-2 w-full"
                    value={state.title}
                    onChange={(e) => setState({ ...state, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Alternative Title"
                    className="border rounded-lg p-2 w-full"
                    value={state.alternativeTitle}
                    onChange={(e) => setState({ ...state, alternativeTitle: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 my-4">
                  <input
                    type="number"
                    placeholder="Year"
                    className="border rounded-lg p-2 w-full"
                    value={state.year}
                    onChange={(e) => setState({ ...state, year: e.target.value })}
                  />
                  <select
                    id="country"
                    className="border rounded-lg p-2 w-full"
                    value={state.countryId}
                    onChange={(e) => setState({ ...state, countryId: e.target.value })}
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
                  value={state.synopsis}
                  onChange={(e) => setState({ ...state, synopsis: e.target.value })}
                />
              </div>
              <div className="flex-col col-span-3">
                <input
                  type="text"
                  placeholder="Link Trailer"
                  className="border rounded-lg mb-2 p-2 w-full"
                  value={state.linkTrailer}
                  onChange={(e) => setState({ ...state, linkTrailer: e.target.value })}
                />
                <div className="my-4">
                  <h3 className="font-bold">Add Award</h3>
                  <input
                    type="text"
                    placeholder="Search Award"
                    className="border rounded-lg p-2 w-full my-2"
                    value={state.searchTerm}
                    onChange={(e) => setState({ ...state, searchTerm: e.target.value })}
                  />
                  <div className="bg-white rounded-lg max-h-40 overflow-y-auto">
                    {state.searchTerm &&
                      filteredAwards.map((award) => (
                        <div
                          key={award.id}
                          className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addAward(award, state.selectedAwards, setState, state)}
                        >
                          {award.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="text-black">
                {state.selectedAwards.map((award) => (
                  <div
                    key={award.id}
                    className="flex items-center bg-gray-100 rounded-lg p-2 mb-2"
                  >
                    <span className="ml-4 flex-1">{award.name}</span>
                    <button
                      className="text-red-500"
                      onClick={() => removeAward(award.id, state.selectedAwards, setState)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
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
                            handleCheckboxChange(availability.id, setState, state.selectedPlatforms)
                          }
                          checked={state.selectedPlatforms.includes(availability.id)}
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
                            handleCheckboxChange(genre.id, setState, state.selectedGenres)
                          }
                          checked={state.selectedGenres.includes(genre.id)}
                        />
                        <span>{genre.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="font-bold">Add Actors (Up to 9)</h3>
                  <input
                    type="text"
                    placeholder="Search Actor Names"
                    className="border rounded-lg p-2 w-full my-2"
                    value={state.searchTerm}
                    onChange={(e) => setState({ ...state, searchTerm: e.target.value })}
                  />
                  <div className="bg-white rounded-lg p-2 max-h-40 overflow-y-auto">
                    {state.searchTerm &&
                      filteredActors.map((actor) => (
                        <div
                          key={actor.id}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => addActor(actor, state.selectedActors, setState, state)}
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
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 my-4">
                  {state.selectedActors.map((actor) => (
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
                        onClick={() => removeActor(actor.id, state.selectedActors, setState)}
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
