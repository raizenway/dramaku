import React, { useState } from 'react';

const CMSShows = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setModalVisible(false);
  };

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
              className="mx-8 flex py-2 text-base font-medium hover:text-primary border-l-4 border-primary pl-4"
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
          <h2 className="text-4xl font-semibold text-dark dark:text-white">Shows</h2>
          <span className="inline-block h-[2px] w-20 bg-primary"></span>
        </div>
        <div className="relative overflow-x-auto shadow-md rounded-lg mb-10">
          <table className="w-full">
            <thead className="text-white bg-dark-2 text-left">
              <tr>
                <th scope="col" className="p-4 w-4 text-center">No.</th>
                <th scope="col" className="p-4 w-2/12">Show</th>
                <th scope="col" className="p-4 w-2/12">Actors</th>
                <th scope="col" className="p-4 w-2/12">Genres</th>
                <th scope="col" className="p-4 w-fit">Synopsis</th>
                <th scope="col" className="p-4 w-1/12">Status</th>
                <th scope="col" className="p-4 w-2/12 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-base text-body-color dark:text-dark-6">
              <tr className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4">1</th>
                <td className="px-2 py-4">Show 1</td>
                <td className="px-2 py-4">Actor 1, Actor 2, Actor 3, Actor 4</td>
                <td className="px-2 py-4">Genre 1, Genre 2, Genre 3, Genre 4</td>
                <td className="px-2 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</td>
                <td className="px-2 py-4">Approved</td>
                <td className="px-2 py-4">
                  <a className="text-blue-500 hover:underline px-2" onClick={openModal}>Edit</a>
                  <a href="/cms-shows.html" className="text-red-500 hover:underline px-2">Delete</a>
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalVisible && (
          <div
            id="movieDetailsModal"
            className="fixed inset-0 z-50 flex h-full overflow-y-auto bg-black bg-opacity-50 justify-center items-center"
          >
            <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-screen overflow-y-auto">
              <section className="py-10 pt-20 lg:py-20 lg:pt-[120px]">
                <div className="container">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h2 className="text-6xl font-bold text-dark">Overlord</h2>
                      <p className="text-base text-body-color">
                        <strong>Other Title:</strong> Ôbârôdo
                      </p>
                      <p className="text-base text-body-color">
                        <strong>Year:</strong> 2015
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-3/12">
                      <img
                        src="assets/images/blog/poster-2.jpg"
                        alt="Movie Poster"
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                    <div className="w-9/12">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/3jE9moHQePI?si=V8fCal7jJZky9Shj"
                        title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-4 mb-10">
                    <a
                      href="javascript:void(0)"
                      className="block rounded-md bg-primary/[0.08] px-4 py-1 text-base text-dark hover:bg-primary hover:text-white"
                    >
                      Animation
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="block rounded-md bg-primary/[0.08] px-4 py-1 text-base text-dark hover:bg-primary hover:text-white"
                    >
                      Action
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="block rounded-md bg-primary/[0.08] px-4 py-1 text-base text-dark hover:bg-primary hover:text-white"
                    >
                      Adventure
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="block rounded-md bg-primary/[0.08] px-4 py-1 text-base text-dark hover:bg-primary hover:text-white"
                    >
                      Fantasy
                    </a>
                  </div>
                  <div className="mb-10">
                    <h2 className="text-4xl font-semibold text-dark">Synopsis</h2>
                    <span className="inline-block h-[2px] w-20 bg-primary"></span>
                    <p className="text-base text-body-color">
                      The final hour of the popular virtual reality game Yggdrasil has come. However, Momonga, a powerful
                      wizard...
                    </p>
                    <p className="mt-4 text-base text-body-color">
                      <strong>Available on:</strong> Crunchyroll and Netflix
                    </p>
                  </div>
                  <div className="mb-10">
                    <h2 className="text-4xl font-semibold text-dark">Casts</h2>
                    <span className="inline-block h-[2px] w-20 bg-primary"></span>
                    <div className="flex flex-wrap">
                      <div className="w-3/12 p-4 flex items-center border-b">
                        <div className="mr-5 h-20 w-20 rounded-full">
                          <img src="assets/images/blog/article-author-01.png" alt="Actor Image" className="w-full" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-dark">Name</h4>
                          <p className="text-sm text-body-color">Role</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Modal Footer */}
              <div className="flex justify-end p-4">
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-2" onClick={closeModal}>
                  Reject
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" onClick={closeModal}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CMSShows;
