import bannerStack from "../../assets/banner-stack.png";

const Banner = () => {
    return (
        <section>
            <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 py-12 md:px-6 lg:flex-row lg:px-8 lg:py-24">

                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-[30px] font-bold leading-tight text-[#0F172A] lg:text-[60px] lg:font-extrabold lg:leading-[60px] lg:tracking-[-1.5px]">
                        Build Your Ideal
                        <br />

                        <span className="brand-gradient-text">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-[390px] text-[14px] font-normal leading-relaxed text-slate-600 lg:mx-0 lg:max-w-[470px] lg:text-[18px]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="mt-7 flex w-full items-center justify-center gap-3 lg:justify-start">
                        <button className="button-gradient-bg h-10 w-[168px] rounded-lg px-4 text-[12px] font-normal text-white lg:w-auto lg:px-6 lg:text-[14px] lg:font-semibold">
                            Explore Technologies
                        </button>

                        <button className="h-10 w-[168px] rounded-lg border border-slate-300 px-4 text-[12px] font-normal text-slate-700 lg:w-auto lg:px-6 lg:text-[14px]">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="mt-10 flex flex-1 justify-center lg:mt-0">
                    <img
                        src={bannerStack}
                        alt="Development Stack"
                        className="w-full max-w-[500px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;