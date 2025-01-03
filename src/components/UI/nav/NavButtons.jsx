import { useState } from "react";
import Icon from "../../Template/Icon";
import NavButton from "./NavButton";

const NavButtons = () => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <ul>
        <NavButton to="/">
          <Icon name="icon-zap" />
          Dashboard
        </NavButton>

        <NavButton to="products">
          <Icon name="icon-shopping-bag" />
          Products
        </NavButton>

        <NavButton
          className="has-submenu"
          onClick={() =>
            setActive((prev) => {
              if(active) return false;
              return true;
            })
          }
        >
          <div className="has-submenu__header">
            <Icon name="icon-file-text" /> Blog
          </div>
          <ul className={active ? "" : "hide"}>
            <NavButton to="blog/posts">Posts</NavButton>
            <NavButton to="blog/new">New Post</NavButton>
          </ul>
        </NavButton>

        <NavButton to="customers">
          <Icon name="icon-users" />
          Customers
        </NavButton>
        <NavButton to="auth">
          <Icon name="icon-log-in" />
          Login
        </NavButton>
      </ul>
    </nav>
  );
};

export default NavButtons;
