const PageHeader = ({ title, description, actions }) => {
  return (
    <header className="h-16 mb-6 border-b border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-medium text-stone-800">
            {title}
          </h1>
          {description && (
            <p className="text-stone-500 mt-1">
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="flex gap-2">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
