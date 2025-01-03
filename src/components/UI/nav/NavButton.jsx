import { NavLink } from "react-router-dom";

const NavButton = ( props ) => {
  const { to, children } = props;
  if (to)
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "active-button" : "")}
        >
          {children}
        </NavLink>
      </li>
    );
  return <li {...props}>{children}</li>;
};

export default NavButton;
