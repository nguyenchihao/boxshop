import React from 'react'
import './Promo.scss'
import { Link } from 'react-router-dom'
const Promo = () => {

  return (
    <div className="promo">
      <Link to="/" className="promo-item">
        <img src="./images/promo.jpg" alt="" className="promo-item__img promo-item__img--bg" />
        <img src="./images/promo-text-1.png" alt="" className="promo-item__img promo-item__img--text" />
      </Link>
      <Link to="/" className="promo-item">
        <img src="./images/promo2.jpg" alt="" className="promo-item__img promo-item__img--bg" />
        <img src="./images/promo-text-2.png" alt="" className="promo-item__img promo-item__img--text" />
      </Link>
    </div>
  )
}

export default Promo
