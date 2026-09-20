import logo from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">

        <button className="lg:hidden">
          <img
            src={hamburger}
            alt="Menu"
            className="h-6 w-6"
          />
        </button>

        <div>
          <img
            src={logo}
            alt="Dev Stack"
            className="w-32 md:w-36"
          />
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <a href="#" className="text-[14px] font-semibold text-pink-500"> Home </a>

          <a href="#technologies" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> Technologies </a>

          <a href="#projects" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> Projects </a>

          <a href="#about" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> About </a>

          <a href="#contact" className="text-[14px] font-medium text-slate-600 hover:text-pink-500"> Contact </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-[14px] font-medium text-slate-700"> Sign In </button>

          <button className="brand-pink-bg rounded-full px-5 py-2.5 text-[14px] font-semibold text-white"> Sign Up </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;