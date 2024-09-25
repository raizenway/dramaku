import React from "react";

const Comments = () => {
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
            className="mx-8 flex py-2 text-base font-medium hover:text-primary border-l-4 border-primary pl-4"
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
            Comments
          </h2>
          <span className="inline-block h-[2px] w-20 bg-primary" />
        </div>
        <div className="relative overflow-x-auto shadow-md rounded-lg mb-10">
          <table className="w-full">
            <thead className="text-white bg-dark-2 text-left">
              <tr>
                <th scope="col" className="p-4 w-4"></th>
                <th scope="col" className="p-4 w-2/12">
                  Username
                </th>
                <th scope="col" className="p-4 w-2/12">
                  Rate
                </th>
                <th scope="col" className="p-4 w-2/12">
                  shows
                </th>
                <th scope="col" className="p-4 w-fit">
                  Comment
                </th>
                <th scope="col" className="p-4 w-2/12">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-base text-body-color dark:text-dark-6">
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <td className="px-2 py-4">User 1</td>
                <td className="px-2 py-4">Email 1</td>
                <td className="px-2 py-4">1</td>
                <td className="px-2 py-4">Comment 1</td>
                <td className="px-2 py-4">Approved</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <td className="px-2 py-4">User 2</td>
                <td className="px-2 py-4">Email 2</td>
                <td className="px-2 py-4">2</td>
                <td className="px-2 py-4">Comment 2</td>
                <td className="px-2 py-4">Approved</td>
              </tr>
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <td className="px-2 py-4">User 3</td>
                <td className="px-2 py-4">Email 3</td>
                <td className="px-2 py-4">3</td>
                <td className="px-2 py-4">Comment 3</td>
                <td className="px-2 py-4">Unapproved</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="m-4 w-full flex gap-8">
          <a
            href="javascript:void(0)"
            className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-primary px-7 hover:bg-blue-dark"
          >
            Approve
          </a>
          <a
            href="javascript:void(0)"
            className="text-white inline-flex items-center justify-center py-2 text-base font-medium text-center rounded-md bg-red-600 px-7 hover:bg-red-800"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comments;
