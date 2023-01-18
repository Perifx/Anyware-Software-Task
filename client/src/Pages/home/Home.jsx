import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <Sidebar />
      <div className="home">
        <Topbar />
        <FeaturedInfo />
        <div className="homeWidgets">
          <WidgetLg />
          <WidgetSm />
        </div>
      </div>
    </div>
  );
}
