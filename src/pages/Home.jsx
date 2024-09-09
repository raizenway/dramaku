import poster1 from "../assets/images/blog/poster-1.jpg";
// import React from "react";

function Home() {
  return (
    <div className="flex mt-20 justify-center">
      {/* Navbar */}
      <div className="w-1/10 bg-dark">
        <a className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Admin
        </a>
        <a
          href="cms-awards.html"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Content Management
        </a>
        <h1 className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white sm:text-2xl lg:text-xl xl:text-2xl">
          Region
        </h1>
        <a
          href="#"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Jepang
        </a>
        <a
          href="#"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Cina
        </a>
        <a
          href="#"
          className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
        >
          Korea
        </a>
      </div>
      {/* konten */}
      <div className="w-9/10 pb-10 lg:pb-20 lg:pt-[]">
        <div className="container mx-auto">
          {/* FILTER */}
          <div className="">
            <div className="w-full px-4">
              <div className="mb-7 mt-12 text-center">
                <div className="flex gap-1">
                  <p className="mt-1 py-2 mr-4" style={{ textAlign: "left" }}>
                    Filtered By
                  </p>
                  <select
                    id="year"
                    name="year"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled="" selected="">
                      [Year]
                    </option>
                    <option value="japan">[Year]</option>
                    <option value="china">[Year]</option>
                    <option value="korea">[Year]</option>
                  </select>
                  <select
                    id="genre"
                    name="genre"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled="" selected="">
                      Genre
                    </option>
                    <option value="japan">[Genre]</option>
                    <option value="china">[Genre]</option>
                    <option value="korea">[Genre]</option>
                  </select>
                  <select
                    id="status"
                    name="status"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled="" selected="">
                      Status
                    </option>
                    <option value="japan">On Going</option>
                    <option value="china">Finished</option>
                    <option value="korea">Coming Soon</option>
                  </select>
                  <select
                    id="availability"
                    name="availability"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled="" selected="">
                      Availability
                    </option>
                    <option value="japan">[Availability]</option>
                    <option value="china">[Availability]</option>
                    <option value="korea">[Availability]</option>
                  </select>
                  <select
                    id="award"
                    name="award"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="" disabled="" selected="">
                      Award
                    </option>
                    <option value="japan">[Award]</option>
                    <option value="china">[Award]</option>
                    <option value="korea">[Award]</option>
                  </select>
                  <p
                    className="mt-1 py-2 ml-2 mr-4"
                    style={{ textAlign: "left" }}
                  >
                    Sorted By
                  </p>
                  <select
                    id="sortedby"
                    name="sortedby"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="alphabetics" selected="">
                      Alphabetics
                    </option>
                    <option value="release">Release</option>
                    <option value="rates">Rates</option>
                    <option value="views">Views</option>
                  </select>
                  <select
                    id="sort"
                    name="sort"
                    className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="alphabetics" selected="">
                      Ascending
                    </option>
                    <option value="release">Descending</option>
                  </select>
                </div>
              </div>
            </div>
            {/* button submit */}
            <div className="flex justify-center mb-10">
              <input
                type="submit"
                defaultValue="Submit"
                className="w-64 px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-white bg-dark hover:bg-blue-dark"
              />
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
            {/* film */}
            <div className="w-full px-10 md:w-1/2 lg:w-1/5">
              <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
                <div className="mb-8 overflow-hidden rounded-[5px]">
                  <a href="details" className="block">
                    <img
                      src={poster1}
                      alt="image"
                      className="w-full transition group-hover:rotate-6 group-hover:scale-125"
                    />
                  </a>
                </div>
                {/* title   */}
                <h3>
                  <a
                    href="details"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    [Title]
                  </a>
                </h3>
                <h2>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-dark hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                  >
                    [Year]
                  </a>
                </h2>
                {/* genre */}
                <div className="flex-wrap mt-1">
                  <a
                    href="javascript:void(0)"
                    className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mb-3 inline-block rounded-[5px] bg-primary/[0.08] px-4 py-0.5 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
                  >
                    [Genre]
                  </a>
                </div>
                {/* rate view */}
                <div className="flex mt-1">
                  <p className="w-full text-base text-body-color">Rate 3.5/5</p>
                  <p
                    className="w-full text-base text-body-color"
                    style={{ textAlign: "right" }}
                  >
                    19 views
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex flex-row gap-4 justify-center">
          <a
            href="javascript:void(0)"
            className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
          >
            &lt;-
          </a>
          <a
            href="javascript:void(0)"
            className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
          >
            1
          </a>
          <a
            href="javascript:void(0)"
            className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
          >
            2
          </a>
          <p className="p-4">...</p>
          <a
            href="javascript:void(0)"
            className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
          >
            98
          </a>
          <a
            href="javascript:void(0)"
            className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
          >
            99
          </a>
          <a
            href="javascript:void(0)"
            className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs font-medium leading-loose text-dark hover:bg-primary hover:text-white"
          >
            -&gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
