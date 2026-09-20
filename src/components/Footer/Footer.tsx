import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-8 pb-12 md:px-8 lg:py-16">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-10">

          <div className="text-center lg:col-span-2 lg:text-left">
            <img
              src={logo}
              alt="Dev Stack"
              className="mx-auto w-[135px] lg:mx-0"
            />

            <p className="mx-auto mt-4 max-w-[330px] text-[12px] font-normal leading-relaxed text-slate-500 lg:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-5 flex items-center justify-center gap-4 text-[12px] font-semibold text-slate-700 lg:justify-start">
              <a href="#">GitHub</a>
              <span className="lg:hidden">•</span>

              <a href="#">Twitter</a>
              <span className="lg:hidden">•</span>

              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[12px] font-bold text-slate-900">
              PRODUCT
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] font-normal text-slate-500">
              <a href="#">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[12px] font-bold text-slate-900">
              COMPANY
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] font-normal text-slate-500">
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[12px] font-bold text-slate-900">
              LEGAL
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[12px] font-normal text-slate-500">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 lg:mt-14"></div>

        <div className="mt-5 flex items-center justify-between text-[12px] font-normal text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;