import React, { useEffect, useState } from 'react'
import './CheckoutPage.scss'
import { FastField, Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import InputField from '../../helpers/custom-field/InputField';
import { useDispatch, useSelector } from 'react-redux';
import OderItem from './components/OderItem';
import ConvertVnd from '../../utils/convertVnd';
import axios from 'axios'
import SelectField from '../../helpers/custom-field/SelectField';
import { URL_API_VN } from '../../constants';
import { useHistory } from 'react-router-dom';
import { actionPostOrder } from '../../actions/OrderAction';
// Toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CheckoutPage() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const token = JSON.parse(localStorage.getItem('token'))
  const history = useHistory()
  const [city, setCity] = useState([])
  const [citySelect, setCitySelect] = useState(1)
  const [district, setDistrict] = useState([])
  const initialValues = {
    name: '',
    phone: '',
    city: 'Tiền Giang',
    district: '',
    address: ''
  }
  const validationSchema = yup.object().shape({
    name: yup.string()
      .required('Vui lòng nhập họ và tên '),
    phone: yup.number()
      .required('Vui lòng nhập số điện thoại '),
    city: yup.string()
      .required('Vui lòng nhập thành phố'),
    district: yup.string()
      .required('Vui lòng nhập huyện'),
    address: yup.string()
      .required('Vui lòng nhập địa chỉ')
  })
  const handleChangePayment = (e) => {

  }
  const getCity = async () => {
    const url = `${URL_API_VN}`
    axios.get(url).then(res => {
      setCity(res.data.LtsItem)
    }).catch(error => {
      console.log('error', error);
    })
  }
  const getDistrict = () => {
    const url = `${URL_API_VN}/${citySelect}/district`
    axios.get(url).then(res => {
      setDistrict(res.data)
    }).catch(error => {
      console.log('error', error);
    })
  }
  const onChangeFiled = (e) => {
    const { name, value } = e.target
    if (name === 'city') {
      const result = city.find((city) => {
        return city.Title === value
      })
      if (result) {
        setCitySelect(result.ID)
      }
    }
  }
  useEffect(() => {
    getCity()
  }, [])
  useEffect(() => {
    getDistrict()
  }, [citySelect])
  if (!token) {
    history.push('/dang-nhap')
    return null
  }
  if (!cart.cartItems.length) {
    return null
  }
  return (
    <div className="checkout">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { name, phone, city, district, address } = values
            const newCart = cart.cartItems.map((item) => {
              return {
                productId: item.prod_id,
                payablePrice: item.price,
                purchaseQty: item.qty
              }
            })
            console.log(cart);
            const order = {
              cardId: cart.id,
              cart: newCart,
              name,
              phone,
              city,
              town: district,
              address,
              fee: 30000,
              totalAmount: cart.totalPrice
            }
            const action = actionPostOrder(order)
            dispatch(action)
              .then(() => {
                history.push('/')
                toast.success("Bạn đã đặt hàng thành công", {
                  position: toast.POSITION.TOP_RIGHT
                })
              })
          }}

        >
          {
            formikProps => {
              return (
                <div className="checkout__content">
                  <div className="row">
                    <div className="col-xl-6">
                      <Form className="checkout-form">
                        <div className="checkout-form__title">
                          Thanh toán và giao hàng
                        </div>
                        <FastField
                          type='text'
                          component={InputField}
                          name="name"
                          placeholder="Họ và tên"
                        />
                        <FastField
                          type='number'
                          component={InputField}
                          name="phone"
                          placeholder="Số điện thoại"
                        />
                        <Field
                          component={SelectField}
                          name="city"
                          placeholder="Thành phố"
                          options={city}
                          onChangeFiled={onChangeFiled}
                        />
                        <Field
                          component={SelectField}
                          name="district"
                          placeholder=" Quận/Huyện"
                          options={district}
                          onChangeFiled={onChangeFiled}
                        />
                        <FastField
                          type='text'
                          component={InputField}
                          name="address"
                          placeholder="Địa chỉ"
                        />
                      </Form>
                    </div>
                    <div className="col-xl-6">
                      <div className="checkout-order">
                        <h2 className="checkout-order__title">
                          Đơn hàng của bạn
                        </h2>
                        <ul className="order-list">
                          <li className="order-list__item">
                            <span>Sản phẩm</span>
                            <span>Tạm tính</span>
                          </li>
                          {cart.cartItems.map((product, index) => {
                            return (
                              <OderItem
                                product={product}
                                key={index}
                              />
                            )
                          })}
                          <li className="order-list__item">
                            <span>Tạm tính</span>
                            <span>{ConvertVnd(cart.totalPrice)}</span>
                          </li>
                          <li className="order-list__item">
                            <span>Giao hàng</span>
                            <span>{ConvertVnd(30000)}</span>
                          </li>
                          <li className="order-list__item">
                            <span>Tổng</span>
                            <span>{ConvertVnd(cart.totalPrice + 30000)}</span>
                          </li>
                        </ul>
                        <ul className="checkout-payment">
                          <li className="checkout-payment__item">
                            <input
                              type="radio"
                              name="payment_method"
                              value="cod"
                              checked
                              onChange={() => handleChangePayment()}
                            />
                            <label htmlFor="">
                              Thanh toán khi nhận hàng
                    </label>
                          </li>
                          <li className="checkout-payment__item">
                            <input
                              type="radio"
                              name="payment_method"
                              value="bacs"
                              onChange={() => handleChangePayment()}
                            />
                            <label htmlFor="">
                              Chuyển khoản ngân hàng
                    </label>
                          </li>
                        </ul>
                        <div className="checkout-button">
                          <button type="submit"
                            onClick={() => formikProps.handleSubmit()}
                          >
                            Đặt hàng
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          }
        </Formik >
      </div >
    </div >
  )
}

export default CheckoutPage
