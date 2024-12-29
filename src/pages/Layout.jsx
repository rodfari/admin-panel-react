import { Outlet } from "react-router-dom";
import Sidebar from "../components/UI/Sidebar";

export const Layout = () => {
  return (
    <div className="app">
    <Sidebar />
      <div className="content">
        <div className="content-header">
          <h1>Header</h1>
        </div>
        <div className="content-body">
            <Outlet />
        </div>
        <div className="content-footer">
          <h1>Footer</h1>
        </div>
      </div>
    </div>
  )
}
export default Layout