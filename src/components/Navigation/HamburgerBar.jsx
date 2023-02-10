import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../base components/ThemeSwitch/ThemeContext";

export default function HamburgerBar() {
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div className="">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className={` border-1 -skew-x-[20deg] ${
            selectedTheme === "Lightmode"
              ? "btn bg-fairy-300 border-fairy-300 rounded-l-none"
              : "btn bg-water-100 border-water-100 hover:bg-water-200  rounded-none"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 skew-x-[20deg]"
            fill="none"
            viewBox="0 0 24 24"
            stroke={selectedTheme === "Lightmode" ? "#87BDC2" : "#207E78"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-normal dropdown-content ${
            selectedTheme === "Darkmode"
              ? " bg-water-100 text-fairy-300 rounded-none -translate-x-[77px]"
              : " bg-fairy-300 text-water-100 rounded-t-none -translate-x-[81px]"
          } mt-0 p-2  border-superDry-primary shadow rounded-box w-fit backdrop-blur-sm z-50`}
        >
          <li>
            <Link className="px-4 " to="/">
              Hjem
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/About">
              Om
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/qualifications">
              Kvalifikasjoner
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/projects">
              Prosjekter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
