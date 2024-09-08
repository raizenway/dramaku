import logo from './assets/images/logo/logo.svg';
import poster1 from './assets/images/blog/poster-1.jpg';
import './assets/css/animate.css';
import './assets/css/swiper-bundle.min.css'
import './assets/css/tailwind.css'
import './App.css';

function App() {
  return (
    <>
  <div className="fixed header left-0 top-0 z-40 flex w-full items-center bg-dark">
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <div className="w-60 max-w-full px-4">
          <a href="index.html" className="navbar-logo block w-full py-5">
            <img
              src={logo}
              alt="logo"
              className="header-logo w-full"
            />
          </a>
        </div>
        <div>
        <form className="flex items-center gap-3">
  <div>
    <input
      type="text"
      placeholder="Masukkan judul"
      className="w-full px-10 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-white placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
    />
  </div>
  <div>
    <input
      type="submit"
      defaultValue="Telusuri"
      className=" px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-white bg-dark hover:bg-white hover:text-dark"
    />
  </div>
</form>
        </div>
      </div>
      <div className="hidden sm:flex items-center mr-4">
        <a
          href="signin.html"
          className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:text-primary"
        >
          Sign In
        </a>
        <a
          href="signup.html"
          className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          Sign Up
        </a>
      </div>
    </div>
  </div>
  {/* ====== Navbar Section End */}
  {/* ====== Team Section End */}
  {/* ====== Catalogue Section Start */}
  <div className="flex mt-20 justify-center">
    {/* Navbar */}
    <div className="w-1/10 bg-dark">
      <a className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        Admin
      </a>
      <a
        href="cms-awards.html"
        className="mx-8 flex py-2 text-base font-medium text-white hover:text-primary"
      >
        Content Management
      </a>
      <h1 className="mx-8 mt-8 mb-4 inline-block text-xl font-semibold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  className="flex-grow mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                <a href="detail-page.html" className="block">
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
                  href="detail-page.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
                <a href="detailPage.html" className="block">
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
                  href="detailPage.html"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  [Title]
                </a>
              </h3>
              <h2>
                <a
                  href="javascript:void(0)"
                  className="mb-4 inline-block text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xs lg:text-xs xl:text-xs"
                >
                  [Year]
                </a>
              </h2>
              {/* genre */}
              <div className="flex-wrap mt-1">
                <a
                  href="javascript:void(0)"
                  className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] px-4 py-0.5 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
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
                <p className="w-full text-base text-body-color dark:text-dark-6">
                  Rate 3.5/5
                </p>
                <p
                  className="w-full text-base text-body-color dark:text-dark-6"
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
          className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
        >
          &lt;-
        </a>
        <a
          href="javascript:void(0)"
          className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
        >
          1
        </a>
        <a
          href="javascript:void(0)"
          className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
        >
          2
        </a>
        <p className="p-4">...</p>
        <a
          href="javascript:void(0)"
          className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
        >
          98
        </a>
        <a
          href="javascript:void(0)"
          className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
        >
          99
        </a>
        <a
          href="javascript:void(0)"
          className="mb-3 bg-primary/[0.08] inline-block rounded-[5px] p-4 text-center text-xs text-dark font-medium leading-loose text-dark hover:bg-primary hover:text-white"
        >
          -&gt;
        </a>
      </div>
    </div>
  </div>
  {/* ====== Blog Section End */}
  {/* ====== Footer Section Start */}
  <footer
    className="relative z-10 bg-dark pt-20 lg:pt-[100px]"
    data-wow-delay=".15s"
  >
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
          <div className="mb-10 w-full">
            <a
              href="javascript:void(0)"
              className="mb-6 inline-block max-w-[160px]"
            >
              <img
                src={logo}
                alt="logo"
                className="max-w-full"
              />
            </a>
            <p className="mb-8 max-w-[270px] text-base text-gray-7">
              Discover your own favorite Drama with us.
            </p>
            <div className="-mx-3 flex items-center">
              <a
                href="https://web.facebook.com/HimakomPolbanOfficial"
                target="_blank"
                className="px-3 text-gray-7 hover:text-white"
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M16.294 8.86875H14.369H13.6815V8.18125V6.05V5.3625H14.369H15.8128C16.1909 5.3625 16.5003 5.0875 16.5003 4.675V1.03125C16.5003 0.653125 16.2253 0.34375 15.8128 0.34375H13.3034C10.5878 0.34375 8.69714 2.26875 8.69714 5.12187V8.1125V8.8H8.00964H5.67214C5.19089 8.8 4.74402 9.17812 4.74402 9.72812V12.2031C4.74402 12.6844 5.12214 13.1313 5.67214 13.1313H7.94089H8.62839V13.8188V20.7281C8.62839 21.2094 9.00652 21.6562 9.55652 21.6562H12.7878C12.994 21.6562 13.1659 21.5531 13.3034 21.4156C13.4409 21.2781 13.544 21.0375 13.544 20.8312V13.8531V13.1656H14.2659H15.8128C16.2596 13.1656 16.6034 12.8906 16.6721 12.4781V12.4438V12.4094L17.1534 10.0375C17.1878 9.79688 17.1534 9.52187 16.9471 9.24687C16.8784 9.075 16.569 8.90312 16.294 8.86875Z" />
                </svg>
              </a>
              <a
                href="https://x.com/himakompolban"
                target="_blank"
                className="px-3 text-gray-7 hover:text-white"
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M20.1236 5.91236C20.2461 5.76952 20.0863 5.58286 19.905 5.64972C19.5004 5.79896 19.1306 5.8974 18.5837 5.95817C19.2564 5.58362 19.5693 5.04828 19.8237 4.39259C19.885 4.23443 19.7 4.09092 19.5406 4.16647C18.8931 4.47345 18.1945 4.70121 17.4599 4.83578C16.7338 4.11617 15.6988 3.6665 14.5539 3.6665C12.3554 3.6665 10.5725 5.32454 10.5725 7.36908C10.5725 7.65933 10.6081 7.94206 10.6752 8.21276C7.51486 8.06551 4.6968 6.71359 2.73896 4.64056C2.60477 4.49848 2.36128 4.51734 2.27772 4.69063C2.05482 5.15296 1.93056 5.66584 1.93056 6.20582C1.93056 7.49014 2.6332 8.62331 3.70132 9.28732C3.22241 9.27293 2.76441 9.17961 2.34234 9.02125C2.13684 8.94416 1.90127 9.07964 1.92888 9.28686C2.14084 10.8781 3.42915 12.1909 5.09205 12.5011C4.75811 12.586 4.40639 12.6311 4.04253 12.6311C3.95431 12.6311 3.86685 12.6284 3.78019 12.6231C3.55967 12.6094 3.38044 12.8067 3.47499 12.9954C4.09879 14.2404 5.44575 15.1096 7.0132 15.1367C5.65077 16.13 3.93418 16.7218 2.06882 16.7218C1.83882 16.7218 1.74015 17.0175 1.9442 17.1178C3.52016 17.8924 5.31487 18.3332 7.22182 18.3332C14.545 18.3332 18.549 12.6914 18.549 7.79843C18.549 7.63827 18.545 7.47811 18.5377 7.31945C19.1321 6.92012 19.6664 6.44528 20.1236 5.91236Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/himakompolban/"
                target="_blank"
                className="px-3 text-gray-7 hover:text-white"
              >
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                >
                  <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
                  <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
                  <path d="M16.0276 4.96777C15.6432 4.96777 15.318 5.29304 15.318 5.67745C15.318 6.06186 15.6432 6.38713 16.0276 6.38713C16.412 6.38713 16.7373 6.06186 16.7373 5.67745C16.7373 5.29304 16.4416 4.96777 16.0276 4.96777Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="my-1 flex justify-center md:justify-end">
              <p className="text-base text-gray-7">
                Designed and Developed by
                <a
                  href="https://tailgrids.com"
                  rel="nofollow noopner"
                  target="_blank"
                  className="text-gray-1 hover:underline"
                >
                  TailGrids and UIdeck
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ====== Footer Section End */}
</>
  );
}

export default App;
