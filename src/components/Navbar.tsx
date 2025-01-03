import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="flex justify-between items-center px-5 py-2">
        <div>
          <img src="src/images/logo.png" alt="logo" className="h-10" />
        </div>
        <div>
          <button type="button" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="h-5 w-5 fill-gray-600 hover:fill-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 fill-gray-600 hover:fill-gray-900"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={`px-3 py-3 space-y-3 ${isOpen ? "block" : "hidden"}`}>
        {" "}
        <a
          href="#"
          className="block text-left px-2 hover:bg-customBeige-40 rounded"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-left px-2 hover:bg-customBeige-40 rounded"
        >
          About
        </a>
        <a
          href="#"
          className="block text-left px-2 hover:bg-customBeige-40 rounded"
        >
          Events
        </a>
        <a
          href="#"
          className="block text-left px-2 hover:bg-customBeige-40 rounded"
        >
          Musollah
        </a>
        <a
          href="#"
          className="block text-left px-2 hover:bg-customBeige-40 rounded-sm"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Navbar;
