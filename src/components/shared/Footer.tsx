import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center ">
          <img
            src={logo}
            alt="BookShelf Footer Graphic"
            className="w-full h-20 object-contain"
          />
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Manage your library with ease — track books, monitor borrows, and keep
          everything organized in one place.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/books"
            >
              All Books
            </Link>
          </li>

          <li>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
              to="/borrow-summary"
            >
              Borrow Summary
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
