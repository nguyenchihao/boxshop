import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundPage.scss'
const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__content">
          <div className="not-found__img">
            <img src="./images/not-found.png" alt="" />
          </div>
          <div className="not-found__text">
            <p className="title">Oops!, looks like something went very wrong. This page will be updated soon!</p>
            <p>
              You can click <Link to="https://www.facebook.com/haoham137/">here</Link> to send me a report or <Link to="/">go back to the Home Page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
