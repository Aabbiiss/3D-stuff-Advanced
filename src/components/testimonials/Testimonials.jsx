import React from "react";
import "./testimonials.css";
import Avatar from "../../assets/textures/about-photo.png";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: Avatar,
    name: "Ashutosh",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint deserunt neque, mollitia praesentium ea magni accusamus nostrum! Non modi ex explicabo vero quisquam quae molestias, earum saepe nulla assumenda dicta, sed, labore mollitia sint culpa quis nam dolor.",
  }

  // {
  //   image: Avatar,
  //   name: "Ashutosh",
  //   review:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint deserunt neque, mollitia praesentium ea magni accusamus nostrum! Non modi ex explicabo vero quisquam quae molestias, earum saepe nulla assumenda dicta, sed, labore mollitia sint culpa quis nam dolor.",
  // },

  // {
  //   image: Avatar,
  //   name: "Ashutosh",
  //   review:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint deserunt neque, mollitia praesentium ea magni accusamus nostrum! Non modi ex explicabo vero quisquam quae molestias, earum saepe nulla assumenda dicta, sed, labore mollitia sint culpa quis nam dolor.",
  // },

  // {
  //   image: Avatar,
  //   name: "Ashutosh",
  //   review:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint deserunt neque, mollitia praesentium ea magni accusamus nostrum! Non modi ex explicabo vero quisquam quae molestias, earum saepe nulla assumenda dicta, sed, labore mollitia sint culpa quis nam dolor.",
  // },

  // {
  //   image: Avatar,
  //   name: "Ashutosh",
  //   review:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint deserunt neque, mollitia praesentium ea magni accusamus nostrum! Non modi ex explicabo vero quisquam quae molestias, earum saepe nulla assumenda dicta, sed, labore mollitia sint culpa quis nam dolor.",
  // },
];

const Testimonials = () => {
  return (
  
    <section id="testimoinials">
      <h5>My Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="avatar">
                <img src={image} alt="First Avatar" />
              </div>
              <h5 className="client__name">
                {name}
              </h5>
              <small className="client__review">
                {review}
                </small>
            </SwiperSlide>

          );
         })} 
              

      </Swiper>
    </section>
  );
};

export default Testimonials;
