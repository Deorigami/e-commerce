import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavContainer">
      <div className="menu">
        <ul>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Dresses</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Winter</a>
            <div className="bubble">
              <p> new</p>
            </div>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <a href="#">
          <h1>
            Ectasy <span>.</span>
          </h1>
        </a>
      </div>
      <div className="search">
        <div className="tools">
          <div className="searchIcon">
            <i class="fas fa-search"></i>
          </div>
          <input type="text" />
          <div className="cart">
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <div className="cartCount">
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
