import type { Technology } from "../../types/Technology";

type TechnologyCardProps = {
    technology: Technology;
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="flex flex-col rounded-2xl border border-[#F1F5F9] bg-white p-5">

            <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                />

                <span
                    className={`rounded-full px-3 py-1 text-[12px] font-normal ${getBadgeColor(technology.badge)}`}>
                    {technology.badge}
                </span>
            </div>

            <h3 className="mt-4 text-[16px] font-bold text-[#0F172A] lg:text-[18px]">
                {technology.name}
            </h3>

            <p className="mt-3 text-[12px] font-normal leading-relaxed text-slate-500">
                {technology.description}
            </p>

            <div className="mt-auto">

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[12px] font-normal">

                    <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                        {technology.category}
                    </span>

                    <span className="text-slate-500">
                        {technology.difficulty}
                    </span>

                    <span className="flex items-center gap-1 text-slate-700">
                        <span className="text-amber-400">★</span>
                        {technology.rating}
                    </span>

                </div>

                <button className="mt-3 w-full rounded-lg bg-[#0F172A] py-3 text-[12px] font-normal text-white">
                    Add to Stack
                </button>

            </div>
        </div>
    );
};

const getBadgeColor = (badge: string) => {
    if (badge === "Versatile" || badge === "Standard") {
        return "bg-emerald-50 text-emerald-500";
    }

    if (badge === "Fast" || badge === "Ubiquitous") {
        return "bg-orange-50 text-orange-500";
    }

    if (badge === "Cache") {
        return "bg-red-50 text-red-500";
    }

    if (badge === "SSR / Edge") {
        return "bg-purple-50 text-purple-500";
    }

    return "bg-sky-50 text-sky-500";
};

export default TechnologyCard;