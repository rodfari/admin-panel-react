import Icon from "../../Template/Icon";
import NavButton from "./NavButton";

const NavButtons = () => {
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

        <NavButton to="orders">
          <Icon name="icon-file-text" />
          Orders
        </NavButton>

        <NavButton to="customers">
          <Icon name="icon-users" />
          Customers
        </NavButton>
      </ul>
    </nav>
  );
};

export default NavButtons;
