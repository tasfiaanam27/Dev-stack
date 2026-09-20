import logo from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
            <div className="relative mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 md:px-6 lg:px-8">

                <button className="lg:hidden">
                    <img
                        src={hamburger}
                        alt="Menu"
                        className="h-6 w-6"
                    />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                    <img
                        src={logo}
                        alt="Dev Stack"
                        className="w-[90px] lg:w-36"
                    />
                </div>

                <div className="hidden items-center gap-8 lg:flex">
                    <a href="#" className="text-[14px] font-semibold text-pink-500"> Home </a>
                    <a href="#technologies" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> Technologies </a>
                    <a href="#projects" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> Projects </a>
                    <a href="#about" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> About </a>
                    <a href="#contact" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> Contact </a>
                </div>

                <div className="flex items-center gap-2 lg:gap-3">
                    <button className="text-[9px] font-bold text-slate-700 lg:text-[14px] lg:font-medium"> Sign In </button>

                    <button className="rounded-full bg-[#D91B7E] px-3 py-2 text-[9px] font-bold text-white lg:px-5 lg:py-2.5 lg:text-[14px] lg:font-semibold"> Sign Up </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;