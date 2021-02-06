import React from 'react'
import './Banner.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="banner-item ">
          <div className="container">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head">
                  New Inspiration 2020
                </p>
                <h1 className="banner-left__title">
                  SPORTS SHOES FOR YOUR
                </h1>
                <p className="banner-left__desc">
                  Trending from shoes style collection
                </p>
                <div className="banner-left__button">
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src="./images/new2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item ">
          <div className="container">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head">
                  New Inspiration 2020
                </p>
                <h1 className="banner-left__title">
                  RUN TRAIN LIVE
                </h1>
                <p className="banner-left__desc">
                  Trending from shoes style collection
                </p>
                <div className="banner-left__button">
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src="./images/new4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-item ">
          <div className="container">
            <div className="banner__content">
              <div className="banner-left">
                <p className="banner-left__head">
                  New Inspiration 2020
                </p>
                <h1 className="banner-left__title">
                  SPORT OUTDOOR SHOES
                </h1>
                <p className="banner-left__desc">
                  Trending from shoes style collection
                </p>
                <div className="banner-left__button">
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-right__bg">
                  <img src="./images/new5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Banner
