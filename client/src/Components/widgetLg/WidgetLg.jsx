import React from "react";
import "./widgetLg.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAnnouncements } from "../../Store/reducers/announcementSlice";

const WidgetLg = () => {
  const dispatch = useDispatch();
  const { announcements } = useSelector((state) => state.announcement);

  useEffect(() => {
    dispatch(getAllAnnouncements());
  }, []);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Announcements</h3>
      <div className="widgetLgTable">
        {announcements &&
          announcements.map((announcement) => (
            <div className="widgetLgAnnouncement" key={announcement._id}>
              <div className="widgetLgUser">
                <img
                  src="https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg"
                  alt=""
                  className="widgetLgImg"
                />
                <div className="widgetLgNameSpace">
                  <span className="widgetLgName">
                    {`Mr. ${announcement.instructor}`}
                  </span>
                  <span className="widgetLgCourseCode">
                    {announcement.courseCode}
                  </span>
                </div>
              </div>
              <div className="widgetLgDescription">
                {announcement.description}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WidgetLg;
