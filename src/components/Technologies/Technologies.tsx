import { useEffect, useState } from "react";
import type { Technology } from "../../types/Technology";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import { toast } from "react-toastify";

const Technologies = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/technologies.json")
            .then((response) => response.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    const handleAddToStack = (technology: Technology) => {
        const alreadyAdded = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning("Technology already added to your stack!");
            return;
        }

        setSelectedTechnologies([...selectedTechnologies, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemove = (id: number) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        const remainingTechnologies = selectedTechnologies.filter(
            (item) => item.id !== id
        );

        setSelectedTechnologies(remainingTechnologies);

        if (technology) {
            toast.info(`${technology.name} removed from your stack.`);
        }
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack.");
    };

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

                {/* Heading */}
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

                {/* Cards and Stack */}
                <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4">

                    {/* Technology Cards */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

                        {technologies.map((technology) => {
                            const isAdded = selectedTechnologies.some(
                                (item) => item.id === technology.id
                            );

                            return (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    handleAddToStack={handleAddToStack}
                                    isAdded={isAdded}
                                />
                            );
                        })}

                    </div>

                    {/* Your Stack */}
                    <div>
                        <div className="rounded-2xl border border-[#F1F5F9] bg-white p-5">

                            <div className="flex items-center justify-between">
                                <h3 className="text-[16px] font-bold text-[#0F172A] lg:text-[18px]">
                                    Your Stack
                                </h3>

                                <span className="rounded-full bg-slate-100 px-2 py-1 text-[12px] text-slate-600">
                                    {selectedTechnologies.length}
                                </span>
                            </div>

                            <p className="mt-1 text-[12px] font-normal text-slate-400">
                                {selectedTechnologies.length === 0
                                    ? "No technologies selected yet."
                                    : `${selectedTechnologies.length} technologies selected.`}
                            </p>

                            {/* Empty State */}
                            {selectedTechnologies.length === 0 ? (
                                <div className="mt-5 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
                                    <p className="text-[12px] font-normal text-slate-400">
                                        Your stack is empty.
                                    </p>
                                </div>
                            ) : (
                                <div className="mt-5 space-y-3">

                                    {/* Selected Technologies */}
                                    {selectedTechnologies.map((technology) => (
                                        <div
                                            key={technology.id}
                                            className="flex items-center justify-between rounded-lg border border-slate-100 p-3"
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={technology.icon}
                                                    alt={technology.name}
                                                    className="h-6 w-6 object-contain"
                                                />

                                                <div>
                                                    <p className="text-[12px] font-semibold text-[#0F172A]">
                                                        {technology.name}
                                                    </p>

                                                    <p className="text-[12px] font-normal text-slate-400">
                                                        {technology.category}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleRemove(technology.id)}
                                                className="text-[16px] text-slate-400 hover:text-red-500"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}

                                    {/* Remove All */}
                                    <button
                                        onClick={handleRemoveAll}
                                        className="w-full rounded-lg border border-red-200 py-2 text-[12px] font-medium text-red-500"
                                    >
                                        Remove All
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Technologies;