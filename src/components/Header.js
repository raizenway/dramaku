import logo from '../../assets/images/logo/logo.svg';
import './App.css';

function Header() {
  return (
    <div class="fixed header left-0 top-0 z-40 flex w-full items-center bg-dark">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center">
        <div class="w-60 max-w-full px-4">
          <a href="index.html" class="navbar-logo block w-full py-5">
            <img src={logo} alt="logo" class="header-logo w-full" />
          </a>
        </div>
        <div>
          <form>
            <div>
              <input type="text" placeholder="Cari judul"
                class="w-full px-10 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-white placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none" />
            </div>
          </form>
        </div>
      </div>
      
      <div class="hidden sm:flex items-center mr-4">
        <a
          href="signin.html"
          class="loginBtn px-[22px] py-2 text-base font-medium text-white hover:text-primary"
        >
          Sign In
        </a>
        <a
          href="signup.html"
          class="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
        >
          Sign Up
        </a>
      </div>
    </div>
    </div>
  );
}

export default Header;
