import { Link } from "react-router-dom";

export default function TourButton() {
  return (
    <div className="bg-opacity-50">
      <div className="dropdown">
        <label tabIndex={0} className="btn bg-fairy-400 text-water-100">
          Tour my site
        </label>
        <ul
          tabIndex={0}
          className="menu menu-normal dropdown-content text-superDry-secondary mt-0 p-2 shadow -translate-x-6 rounded-box w-48 backdrop-blur-sm z-50"
        >
          <li>
            <Link className="m-auto text-3xl" to="/About">
              Om
            </Link>
          </li>
          <li>
            <Link className="m-auto text-3xl" to="/Qualifications">
              Skills
            </Link>
          </li>
          <li>
            <Link className="m-auto text-3xl" to="/Projects">
              Prosjekter
            </Link>
          </li>
          <li>
            <Link className="m-auto text-3xl" to="/Contact">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
