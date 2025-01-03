import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-5 sm:pb-2">
      <div className="flex justify-between items-center px-5 py-2 sm:p-0">
        <div>
          <img src="src/images/logo.png" alt="logo" className="h-10" />
        </div>
        <div className="sm:hidden">
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
      <div
        className={`px-3 pb-2 sm:space-x-4 md:space-x-5 ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <a
          href="#"
          className="block text-left px-2 py-2 hover:bg-customBeige-40 rounded sm:rounded-xl"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-left px-2 py-2 hover:bg-customBeige-40 rounded sm:rounded-xl"
        >
          About
        </a>
        <a
          href="#"
          className="block text-left px-2 py-2 hover:bg-customBeige-40 rounded sm:rounded-xl"
        >
          Events
        </a>
        <a
          href="#"
          className="block text-left px-2 py-2 hover:bg-customBeige-40 rounded sm:rounded-xl"
        >
          Musollah
        </a>
        <a
          href="#"
          className="block text-left px-2 py-2 hover:bg-customBeige-40 rounded sm:bg-gray-800 sm:text-gray-100 hover:sm:bg-black hover:sm:rounded"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Navbar;
