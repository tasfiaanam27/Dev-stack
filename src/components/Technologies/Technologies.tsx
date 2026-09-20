import { useEffect, useState } from "react";
import type { Technology } from "../../types/Technology";

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

        <h2 className="text-[30px] font-bold text-[#0F172A]">
          Explore the{" "}
          <span className="accent-gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-[14px] font-normal text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>

        <p className="mt-5 text-[14px] text-slate-500">
          {technologies.length} technologies loaded
        </p>

      </div>
    </section>
  );
};

export default Technologies;