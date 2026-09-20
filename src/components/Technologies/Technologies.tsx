import { useEffect, useState } from "react";
import type { Technology } from "../../types/Technology";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <span className="loading loading-spinner loading-lg"></span>
        <p className="mt-3 text-[14px] text-slate-500">
          Loading technologies...
        </p>
      </div>
    );
  }

  return (
    <section id="technologies">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-6 lg:px-8">

        {/* Section Heading */}
        <div>
          <h2 className="text-[24px] font-bold text-[#0F172A] lg:text-[36px] lg:font-extrabold">
            Explore the{" "}
            <span className="accent-gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-[12px] font-normal text-slate-500 lg:text-[16px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technologies and Stack */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div>
            <div className="rounded-2xl border border-[#F1F5F9] bg-white p-5">
              <h3 className="text-[16px] font-bold text-[#0F172A] lg:text-[18px]">
                Your Stack
              </h3>

              <p className="mt-1 text-[12px] font-normal text-slate-400">
                No technologies selected yet.
              </p>

              <div className="mt-5 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
                <p className="text-[12px] font-normal text-slate-400">
                  Your stack is empty.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Technologies;