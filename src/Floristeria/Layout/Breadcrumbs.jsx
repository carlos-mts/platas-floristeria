import { Link, useLocation } from "react-router";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone-500 mb-4">
      <ol className="flex items-center gap-2">
        <li>
          <Link to="/" className="hover:text-stone-800">
            Inicio
          </Link>
        </li>

        {segments.map((segment, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={path} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-stone-800 font-medium capitalize">
                  {segment}
                </span>
              ) : (
                <Link to={path} className="hover:text-stone-800 capitalize">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
