import React from 'react'
import './Sale.scss'
import { Link } from 'react-router-dom'
const Sale = () => {
  return (
    <div className="sale">
      <Link to="/" className="sale-item">
        <img src="./images/sale1.jpg" alt="" />
        <div className="sale-item__overlay sale-item__overlay--red">

        </div>
      </Link>
      <Link to="/" className="sale-item">
        <img src="./images/sale2.jpg" alt="" />
        <div className="sale-item__border">

        </div>
      </Link>
      <Link to="/" className="sale-item">
        <img src="./images/sale3.jpg" alt="" />
        <div className="sale-item__overlay sale-item__overlay--black">

        </div>
      </Link>
    </div>
  )
}

export default Sale
