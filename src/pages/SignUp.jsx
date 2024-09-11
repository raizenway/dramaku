import bg from "../assets/images/poster/background.svg"
import logo from "../assets/images/logo/logo.svg";
import google from "../assets/images/logo/google.svg"

function SignUp() {
return(
<div
  className="bg-dark lg:py-[90px] dark:bg-dark" 
  style={{ backgroundImage: `url(${bg})`}}
  >

    <div className="container flex items-center justify-center">
    <div className="flex flex-wrap mx-4 ">
    <div className="w-full px-4">
      <div
        className="wow fadeInUp relative mx-auto max-w-[525px] overflow-hidden rounded-xl shadow-form bg-dark dark:bg-dark-2 py-14 px-8 text-center sm:px-12 md:px-[60px]"
        data-wow-delay=".15s"
      >
        <div className="mb-10 text-center">
          <a
            href="javascript:void(0)"
            className="mx-auto inline-block max-w-[160px]"
          >
            <img
              src={logo}
              alt="logo"
              className="dark:hidden"
            />
            <img
              src={logo}
              alt="logo"
              className="hidden dark:block"
            />
          </a>
        </div>
        <form>
          <div className="mb-[22px]">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
            />
          </div>
          <div className="mb-[22px]">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
            />
          </div>
          <div className="mb-[22px]">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
            />
          </div>
          <div className="mb-[22px]">
            <a
              href="/"
              className="flex w-full justify-center px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
            >
              <span>Sign Up</span>
            </a>
          </div>
          <div className="mb-[22px]">
            <a
              href="/"
              className="flex gap-1 justify-center w-full px-5 py-3 text-base text-dark transition duration-300 ease-in-out border rounded-md cursor-pointer bg-white hover:bg-blue-dark hover:text-white"
            >
              <img
                src={google}
                alt="google"
                style={{ width: "1.5rem" }}
              />
              <span>Sign Up with Google</span>
            </a>
          </div>
        </form>
        <p className="mb-4 text-base text-body-secondary">
          By creating an account you are agree with our
          <a href="javascript:void(0)" className="text-primary hover:underline">
            Privacy
          </a>
          and
          <a href="javascript:void(0)" className="text-primary hover:underline">
            Policy
          </a>
        </p>
        <p className="text-base text-body-secondary">
          Already have an account?
          <a href="/sign-in" className="text-primary hover:underline">
            Sign In
          </a>
        </p>
        <div>
          <span className="absolute top-1 right-1">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="1.39737"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 1.39737 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="1.39737"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 1.39737 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 13.6943 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 13.6943 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 25.9911 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 25.9911 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="38.6026"
                r="1.39737"
                transform="rotate(-90 38.288 38.6026)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="1.99122"
                r="1.39737"
                transform="rotate(-90 38.288 1.99122)"
                fill="#3056D3"
              />
              <circle
                cx="1.39737"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 1.39737 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 13.6943 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 25.9911 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="26.3057"
                r="1.39737"
                transform="rotate(-90 38.288 26.3057)"
                fill="#3056D3"
              />
              <circle
                cx="1.39737"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 1.39737 14.0086)"
                fill="#3056D3"
              />
              <circle
                cx="13.6943"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 13.6943 14.0086)"
                fill="#3056D3"
              />
              <circle
                cx="25.9911"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 25.9911 14.0086)"
                fill="#3056D3"
              />
              <circle
                cx="38.288"
                cy="14.0086"
                r="1.39737"
                transform="rotate(-90 38.288 14.0086)"
                fill="#3056D3"
              />
            </svg>
          </span>
          <span className="absolute left-1 bottom-1">
            <svg
              width={29}
              height={40}
              viewBox="0 0 29 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="2.288"
                cy="25.9912"
                r="1.39737"
                transform="rotate(-90 2.288 25.9912)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="25.9911"
                r="1.39737"
                transform="rotate(-90 14.5849 25.9911)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="25.9911"
                r="1.39737"
                transform="rotate(-90 26.7216 25.9911)"
                fill="#3056D3"
              />
              <circle
                cx="2.288"
                cy="13.6944"
                r="1.39737"
                transform="rotate(-90 2.288 13.6944)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="13.6943"
                r="1.39737"
                transform="rotate(-90 14.5849 13.6943)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="13.6943"
                r="1.39737"
                transform="rotate(-90 26.7216 13.6943)"
                fill="#3056D3"
              />
              <circle
                cx="2.288"
                cy="38.0087"
                r="1.39737"
                transform="rotate(-90 2.288 38.0087)"
                fill="#3056D3"
              />
              <circle
                cx="2.288"
                cy="1.39739"
                r="1.39737"
                transform="rotate(-90 2.288 1.39739)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="38.0089"
                r="1.39737"
                transform="rotate(-90 14.5849 38.0089)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="38.0089"
                r="1.39737"
                transform="rotate(-90 26.7216 38.0089)"
                fill="#3056D3"
              />
              <circle
                cx="14.5849"
                cy="1.39761"
                r="1.39737"
                transform="rotate(-90 14.5849 1.39761)"
                fill="#3056D3"
              />
              <circle
                cx="26.7216"
                cy="1.39761"
                r="1.39737"
                transform="rotate(-90 26.7216 1.39761)"
                fill="#3056D3"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

);
  

}

export default SignUp;