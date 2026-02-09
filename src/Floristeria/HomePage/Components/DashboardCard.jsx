import { Link } from "react-router";

const DashboardCard = ({ title, description, cta, to }) => {
  return (
    <div className="bg-white rounded-2xl border border-soft p-6 shadow-sm flex flex-col items-center text-center">

      {/* Icon placeholder */}
      <div className="h-24 w-24 rounded-full bg-emerald-600/10 mb-4" />

      <h3 className="font-medium text-stone-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-stone-500 mb-6">
        {description}
      </p>

      <Link
        to={to}
        className="mt-auto bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-5 py-2 rounded-xl transition"
      >
        {cta} →
      </Link>
    </div>
  );
};

export default DashboardCard;