import "./sidebar.css";
import {
  Article,
  CalendarMonth,
  Campaign,
  House,
  School,
  TrendingUp,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("isLogged", false);
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarHeader">
          <h3 className="sidebarTitle">Coligo.</h3>
          <button className="logoutBtn" onClick={logoutHandler}>
            LOGOUT
          </button>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <House className="sidebarIcon" />
                Dashboard
              </li>
            </Link>
            <li className="sidebarListItem">
              <CalendarMonth className="sidebarIcon" />
              Schedule
            </li>
            <li className="sidebarListItem">
              <Article className="sidebarIcon" />
              Courses
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              Gradbook
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Performance
            </li>
            <li className="sidebarListItem">
              <Campaign className="sidebarIcon" />
              Announcement
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
