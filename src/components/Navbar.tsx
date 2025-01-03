const Navbar = () => {
  return (
    <header>
      {/* <header className="bg-red-100"> */}
      <nav className="flex justify-evenly items-center px-5 py-2">
        <div>
          <img src="src/images/logo.png" alt="logo" className="h-10" />
        </div>
        <div>
          <ul className="flex flex-row space-x-8">
            <li className="px-2 py-1 hover:bg-customBeige-70 rounded-xl">
              <a href="#">Home</a>
            </li>
            <li className="px-2 py-1 hover:bg-customBeige-70 rounded-xl">
              <a href="#">Events</a>
            </li>
            <li className="px-2 py-1 hover:bg-customBeige-70 rounded-xl">
              <a href="#">Musollah</a>
            </li>
            <li className="bg-black text-white px-2 py-1 hover:bg-gray-800 rounded-md">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
