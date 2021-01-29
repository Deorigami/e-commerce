import React from "react";

import styled from "styled-components/macro";
import Pic1 from "../../assets/icons/019-human.png";
import Pic2 from "../../assets/icons/046-pantone.png";
import Pic3 from "../../assets/icons/039-problem solve.png";
import Pic4 from "../../assets/icons/031-palette.png";

function Menu() {
  return (
    <Container>
      <div className="container">
        <div className="Header">
          <header>
            <h3>Styles</h3>
            <img src={Pic1} alt="" />
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            repellat!
          </p>
        </div>
        <div className="cat">
          <img src={Pic2} alt="" />
          <h4>Empire Waist</h4>
          <a href="#">
            Shop Now <i class="fas fa-plus"></i>
          </a>
        </div>
        <div className="cat">
          <img src={Pic3} alt="" />
          <h4>Wedding Vibes</h4>
          <a href="#">
            Shop Now <i class="fas fa-plus"></i>
          </a>
        </div>
        <div className="cat">
          <img src={Pic4} alt="" />
          <h4>Classic Trumpets</h4>
          <a href="#">
            Shop Now <i class="fas fa-plus"></i>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Menu;

const Container = styled.section`
  height: 12rem;
  width: 100%;
  padding: 0 6rem 0 6rem;

  .container {
    background: #25293e;
    width: 100%;
    height: 100%;
    border-radius: 3rem 3rem 0 0;
    display: flex;
    padding: 2rem 2rem 0 2rem;

    .Header {
      width: 25%;
      height: 100%;

      p {
        font-size: 0.9rem;
        margin-top: 1rem;
        color: white;
        letter-spacing: 0.01rem;
        font-family: "Walsheim-Thin";
      }

      header {
        display: flex;
      }

      h3 {
        color: white;
        font-family: "Recoleta";
        letter-spacing: 0.01rem;
        font-weight: 900;
        margin-right: 0.5rem;
        font-size: 1.5rem;
      }
      img {
        width: 2rem;
      }
    }

    .cat {
      position: relative;
      width: 25%;
      height: 100%;
      font-family: "Walsheim-Thin";
      padding-left: 3rem;
        color: white;
        font-family: "Recoleta-Thin";
        letter-spacing: 0.01rem;
        margin-bottom: 0.5rem;
      }

      img {
        width: 3rem;
        margin-bottom: 2rem;
      }

      a {
        font-size: 0.8rem;
        color: white;
        text-decoration: none;

        i {
          font-size: 0.7rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
`;
