import bg from "../../../../public/images/auth/background.svg";
import logo from "../../../../public/images/logo.svg";

function AuthFormLayout({ children }) {
    return (
        <div
            className="bg-dark lg:py-[90px]"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container flex items-center justify-center min-h-screen">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div
                            className="wow fadeInUp relative mx-auto w-[400px] md:w-[500px] overflow-hidden rounded-xl shadow-form bg-dark py-14 px-8 text-center sm:px-12 md:px-[60px]"
                            data-wow-delay=".15s"
                        >
                            <div className="mb-10 text-center">
                                <a
                                    href="/"
                                    className="mx-auto inline-block max-w-[160px]"
                                >
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthFormLayout;
