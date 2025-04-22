import { useState, useEffect, useRef } from "react";

interface CustomMultiSelectProps {
  title: string;
  icon: React.ElementType;
  options: string[];
}

export const MultiSelector: React.FC<CustomMultiSelectProps> = ({
  title,
  icon: Icon,
  options,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // For outside click

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
    setSearch("");
  };

  const removeTag = (option: string) => {
    setSelected((prev) => prev.filter((item) => item !== option));
  };

  const filteredOptions = options.filter(
    (option) =>
      option.toLowerCase().includes(search.toLowerCase()) &&
      !selected.includes(option)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className=" text-white rounded-xl p-4 w-full max-w-xs relative"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-bright-sun-400" />
        <span className="font-semibold">{title}</span>
      </div>

      <div
        className="flex flex-wrap items-center gap-2 px-3 py-2 rounded bg-mine-shaft-900 text-mine-shaft-300 outline-none cursor-text"
        onClick={() => setIsOpen(true)}
      >
        {selected.map((item) => (
          <span
            key={item}
            className="flex items-center bg-bright-sun-600 text-white px-2 py-0.5 rounded-full text-sm"
          >
            {item}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTag(item);
              }}
              className="ml-1 text-white hover:text-red-400"
            >
              ×
            </button>
          </span>
        ))}

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 min-w-[100px]"
        />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute mt-1 w-full bg-gray-700 border border-gray-600 rounded max-h-48 overflow-y-auto z-10">
          {filteredOptions.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className="px-4 py-2 hover:bg-gray-600 cursor-pointer text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelector;
