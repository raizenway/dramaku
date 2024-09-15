import React from "react";

const Users = () => {
  return (
    <div className="flex justify-center mt-24">
      <div className="bg-dark text-white space-y-6 py-7 px-1 w-70 hidden md:block">
        <nav>
          <a
            href="/cms-shows"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Shows
          </a>
          <div className="ml-8">
            <a
              href="/cms-shows"
              className="mx-8 flex py-2 text-base font-medium hover:text-primary"
            >
              Validate
            </a>
            <a
              href="/cms-show-input"
              className="mx-8 flex py-2 text-base font-medium hover:text-primary border-l-4 border-primary pl-4"
            >
              Input New Shows
            </a>
          </div>
          <a
            href="/cms-countries"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Countries
          </a>
          <a
            href="/cms-awards"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Awards
          </a>
          <a
            href="/cms-genres"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Genres
          </a>
          <a
            href="/cms-actors"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Actors
          </a>
          <a
            href="/cms-comments"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Comments
          </a>
          <a
            href="/cms-users"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Users
          </a>
          <a
            href="/cms-shows"
            className="mx-8 flex py-2 text-base font-medium hover:text-primary"
          >
            Logout
          </a>
        </nav>
      </div>
      <div className="flex-1 flex-wrap p-10 w-1">
        <div className="mb-4">
          <h2 className="text-4xl font-semibold text-dark dark:text-white">
            New Show
          </h2>
          <span className="inline-block h-[2px] w-20 bg-primary" />
        </div>
        <form>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="flex items-center justify-center bg-gray-200 rounded-lg h-64 mb-4">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="block text-gray-500 text-sm text-center">
                    Upload Show Picture
                  </span>
                  <input id="file-upload" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Alternative Title"
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <input
                  type="number"
                  placeholder="Year"
                  className="border rounded-lg p-2 w-full"
                />
                <select className="border rounded-lg p-2 w-full">
                  <option disabled="" selected="">
                    Country
                  </option>
                  <option>Japan</option>
                  <option>China</option>
                  <option>Korea</option>
                </select>
              </div>
              <textarea
                className="border rounded-lg p-2 w-full my-4"
                rows={5}
                placeholder="Synopsis"
                defaultValue={""}
              />
            </div>
            <input
              type="text"
              placeholder="Availability"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Link Trailer"
              className="border rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Award"
              className="border rounded-lg p-2 w-full"
            />
            <div className="col-span-3">
              <div className="my-4">
                <h3 className="font-bold">Add Genres</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4  mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Action</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Adventures</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Romance</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Action</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Adventures</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Romance</span>
                  </label>
                </div>
              </div>
              <div className="my-4">
                <h3 className="font-bold">Add Actors (Up to 9)</h3>
                <input
                  type="text"
                  placeholder="Search Actor Names"
                  className="border rounded-lg p-2 w-full my-2"
                />
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 my-2">
                  <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <div className="w-16 h-24 bg-gray-400 rounded-md" />
                    <span className="ml-4 flex-1">Actor 1</span>
                    <button className="text-red-500">x</button>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <div className="w-16 h-24 bg-gray-400 rounded-md" />
                    <span className="ml-4 flex-1">Actor 2</span>
                    <button className="text-red-500">x</button>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-lg p-2">
                    <div className="w-16 h-24 bg-gray-400 rounded-md" />
                    <span className="ml-4 flex-1">Actor 3</span>
                    <button className="text-red-500">x</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 my-4"></div>
              <a
                href="javascript:void(0)"
                className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
              >
                Submit
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Users;
