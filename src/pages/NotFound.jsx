import poster1 from "../assets/images/blog/poster-1.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <section className="py-10 pt-20  lg:py-20 lg:pt-[120px]">
        <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto my-16 text-center">
          <div>
            <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
              We Can't Seem to Find The Page You're Looking For.
            </h3>
            <p className="mb-8 text-base text-body-color dark:text-dark-6">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <button
              onClick={handleGoHome} // Set the click handler to redirect to home
              className="py-3 text-base font-medium text-white transition rounded-md bg-dark px-7 hover:bg-primary"
            >
              Go To Home
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
