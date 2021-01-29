import React from "react";
import "./Content.css";
import Icon from "../../assets/icons/002-sketch.png";
import Model from "../../assets/images/Model.png";

function Content() {
  return (
    <main>
      <div className="left">
        <header>
          <p className="title">Trendy Collection's</p>
          <h1>
            Building <img src={Icon} alt=" " />
            <br /> a better you
          </h1>
          <p className="info">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Ecstacy outfit
          </p>
          <div className="buttons">
            <button className="start">
              <p>Start Shopping</p>
              <div className="arrow">
                <i class="fas fa-angle-right"></i>
              </div>
            </button>
            <button className="play">
              <i class="fas fa-play"></i>
            </button>
            <p className="playVid">Play video</p>
          </div>
        </header>
        <div className="comment">
          <div className="userInfo">
            <p className="name">Hannah</p>
            <p className="proffesion">Fashion Blogger</p>
          </div>
          <div className={"userPhoto"}>
            <img src={Model} alt="" />
          </div>
          <div className="userComments">
            <i class="fas fa-quote-right"></i>
            <div className="text">
              <h4>I Just Love Ecstacy !</h4>
              <p>
                Their product are so much premium to make you feel confidence. I
                cant think of buying from anyone but them.
              </p>
            </div>
            <div className="rating">
              <h4>4.9</h4>

              <i class="fas fa-star"></i>

              <div className="line"></div>
              <p>Overall rating</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </main>
  );
}

export default Content;
