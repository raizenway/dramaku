export default function AutenthicationButton() {
    return (
      <div className="hideOnMobile sm:flex items-center mr-4">
      <a
        href="/login"
        className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:text-primary"
      >
        Login
      </a>
      <a
        href="/register"
        className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
      >
        Register
      </a>
    </div>
    );
}