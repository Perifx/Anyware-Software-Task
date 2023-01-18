import "./widgetSm.css";
import { HourglassBottom } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllQuizes } from "../../Store/reducers/quizSlice";

export default function WidgetSm() {
  const dispatch = useDispatch();
  const { quizes } = useSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getAllQuizes());
  }, []);

  return (
    <div className="widgetSm">
      <div className="widgetSmTitle">
        <h4>What's due</h4>
        <Link className="link">
          <span className="widgetSmLink">All</span>
        </Link>
      </div>
      <span className="widgetSmSolgan">Sometimes "LATER" becomes "NEVER</span>
      <div className="widgetSmList">
        {quizes &&
          quizes.map((quiz) => (
            <div className="widgetSmListItem" key={quiz._id}>
              <div className="widgetSmQuizTitle">
                <HourglassBottom className="widgetSmQuizTitleIcom" />
                <span style={{ color: "#333" }}>{quiz.courseName}</span>
              </div>
              <div className="widgetSmQuizDetails">
                <div className="widgetSmQuizDetailsHead">Course:</div>
                <div className="widgetSmQuizDetailsvalue">
                  {quiz.courseCode}
                </div>
                <div className="widgetSmQuizDetailsHead">Topic:</div>
                <div className="widgetSmQuizDetailsvalue">{quiz.topic}</div>
                <div className="widgetSmQuizDetailsHead">Due to:</div>
                <div className="widgetSmQuizDetailsvalue">
                  {quiz.deadline.split("T")[0]}
                </div>
              </div>
              <button className="widgetSmButton">Start Quiz</button>
            </div>
          ))}
      </div>
    </div>
  );
}
