import { NavLink } from "react-router-dom";

const NavButton = ({ children, to }) => {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active-button" : "")}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavButton;
