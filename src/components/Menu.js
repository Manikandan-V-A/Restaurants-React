import React from "react";
import { menu } from "../Data";
import '@fontsource/metropolis'; 
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="box-container-main">
        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <a href="#">
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className="price">
                Starting from<span> {item.price}</span>
              </div>
              {/* <a href="#" className="btn">
                add to cart
              </a> */}
              {/* <button className="custom-btn btn-16">Read More</button> */}
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
