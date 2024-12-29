import "../../sass/Sidebar.sass";
import Navigation from "./nav/Navigation";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <Navigation />
    </div>
  );
};

export default Sidebar;
