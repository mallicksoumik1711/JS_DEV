import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 h-24 gap-10 shadow-lg bg-gray-800">
      <div>
        <Link to="#">
          <img src="" alt="Logo" />
        </Link>
      </div>
      <ul className="flex justify-center gap-5">
        <li>
          <NavLink to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-500"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-500"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-500"}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/github"
            className={({ isActive }) =>
              `${isActive ? "text-orange-700" : "text-gray-500"}`
            }
          >
            Github
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-5">
        <Link to="#">Get started</Link>
        <Link to="#">Log in</Link>
      </div>
    </div>
  );
}

export default Header;
