import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredInfoWrapper">
        <div className="featuredInfoTitle">
          <h2>EXAM TIME</h2>
        </div>
        <div className="featuredInfoSlogan">
          <p>
            Here we are, Are you ready to fight? Don't worry, We prepared Some
            tips to be ready for your exams
          </p>
        </div>
        <div className="featuredInfoMaxim">
          <span>"Nothing happens until somthing moves". Albert Einstien</span>
        </div>
        <button className="featuredInfoBtn">View exams tips</button>
      </div>
    </div>
  );
}
