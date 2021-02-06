import React from 'react'
import './Top.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionSignOut } from '../../../actions/userAction'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Top = ({ setToggle, user, cartLength }) => {
  const dispatch = useDispatch()
  const logout = () => {
    const action = actionSignOut()
    dispatch(action)
      .then(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh-token')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('result')
        toast.success("Đăng xuất thành công", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT
        })
      })
  }
  return (
    <div className="header-top">
      <div className="container">
        <div className="top">
          <div className="top-left">
            <div className="top-left__button" onClick={() => setToggle(true)}>
              <i className='bx bx-menu' ></i>
            </div>
            <div className="top-left__phone">
              <i className='bx bx-phone'></i>
              <span>+189 284 5679</span>
            </div>
          </div>
          <ul className="top-right">
            {/* <Link to="/" className="top-item">
              <i className='bx bx-heart'></i>
              <span to="/">Wishlist (0)</span>
            </Link> */}
            {
              !user.name &&
              <li className="top-item">
                <i className='bx bx-user'></i>
                <Link to="/dang-nhap">Đăng nhập</Link>
                <span> / </span>
                <Link to="/dang-ky">Đăng ký</Link>
              </li>
            }
            {
              user.name &&
              <li className="top-item">
                <i className='bx bx-user'></i>
                <Link to="/login">{user.name}</Link>
                <span> / </span>
                <span onClick={() => logout()}>Đăng xuất</span>
              </li>
            }
            <Link to="/gio-hang" className="top-item top-item--cart">
              <i className='bx bx-cart' ></i>
              <p> {cartLength} sản phẩm </p>
            </Link>
          </ul>
        </div>
      </div>
    </div >
  )
}

export default Top
