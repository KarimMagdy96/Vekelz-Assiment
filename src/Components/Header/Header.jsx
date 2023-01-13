import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="col-12 header d-flex justify-content-between align-items-center">
      <div class="search">
        <span class="fa-search">
          <img
            src="/src/assets/img/Component 9.svg"
            className="w-100"
            alt="search"
          />
        </span>
        <input type="text" placeholder="Search or type" />
      </div>
      <div className="headerProfile d-flex  justify-content-center align-items-center">
        <span>
          <img
            className="w-100"
            src="/src/assets/img/notification.svg"
            alt="notification icon"
          />
        </span>
        <span className="profileImg">
          <img
            className="w-100"
            src="/src/assets/img/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
}
