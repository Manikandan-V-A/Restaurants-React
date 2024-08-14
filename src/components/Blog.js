import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>offers</span>
        </h1>
        <div className="box-container-blogs-main">
        <div class="box-container-blogs">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  40% off upto ₹80
                </a>
                <span>KFC</span>
                <p>Burgers, Fast Food, Rolls & Wraps</p>
                <a href="#" class="btn">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
