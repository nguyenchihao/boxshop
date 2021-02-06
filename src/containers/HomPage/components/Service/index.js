import React from 'react'
import './Service.scss'
const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="service__item">
              <img src="./images/service1.jpg" alt="" />
              <div className="service__overlay">

              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="service__item">
              <img src="./images/service2.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="service__item">
              <img src="./images/service3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
