import React from "react";

const CMSAwards = () => {
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
              className="mx-8 flex py-2 text-base font-medium hover:text-primary"
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
            className="mx-8 flex py-2 text-base font-medium hover:text-primary border-l-4 border-primary pl-4"
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
            Awards
          </h2>
          <span className="inline-block h-[2px] w-20 bg-primary" />
        </div>
        <form className="mb-10 bg-gray-100 p-4 rounded-lg">
          <div className="flex flex-wrap">
            <input
              type="text"
              id="award"
              placeholder="Award Name"
              className="text-base text-body-color dark:text-dark-6 border border-gray-400 rounded-lg p-2 mx-4 my-2"
            />
            <input
              type="number"
              id="year"
              placeholder="What Year"
              className="text-base text-body-color dark:text-dark-6 border border-gray-400 rounded-lg p-2 mx-4 my-2"
            />
            <input
              type="text"
              id="country"
              placeholder="Country Origin"
              className="text-base text-body-color dark:text-dark-6 border border-gray-400 rounded-lg p-2 mx-4 my-2"
            />
            <div className="m-4 w-full">
              <a
                href="javascript:void(0)"
                className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
              >
                Submit
              </a>
            </div>
          </div>
        </form>
        <div className="relative overflow-x-auto shadow-md rounded-lg mb-10">
          <table className="w-full">
            <thead className="text-white bg-dark-2 text-left">
              <tr>
                <th scope="col" className="p-4 w-4 text-center">
                  No.
                </th>
                <th scope="col" className="p-4 w-fit">
                  Award
                </th>
                <th scope="col" className="p-4 w-2/12">
                  Country
                </th>
                <th scope="col" className="p-4 w-2/12">
                  Year
                </th>
                <th scope="col" className="p-4 w-2/12 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-base text-body-color dark:text-dark-6">
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">
                  1
                </th>
                <td className="px-2 py-4">Award 1</td>
                <td className="px-2 py-4">Country 1</td>
                <td className="px-2 py-4">2021</td>
                <td className="px-2 py-4">
                  <a href="#" className="text-primary hover:underline px-1">
                    Rename
                  </a>
                  <a href="#" className="text-red-500 hover:underline px-1">
                    Delete
                  </a>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">
                  2
                </th>
                <td className="px-2 py-4">Award 2</td>
                <td className="px-2 py-4">Country 2</td>
                <td className="px-2 py-4">2022</td>
                <td className="px-2 py-4">
                  <a href="#" className="text-primary hover:underline px-1">
                    Rename
                  </a>
                  <a href="#" className="text-red-500 hover:underline px-1">
                    Delete
                  </a>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">
                  3
                </th>
                <td className="px-2 py-4">Award 3</td>
                <td className="px-2 py-4">Country 3</td>
                <td className="px-2 py-4">2023</td>
                <td className="px-2 py-4">
                  <a href="#" className="text-primary hover:underline px-1">
                    Rename
                  </a>
                  <a href="#" className="text-red-500 hover:underline px-1">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CMSAwards;
