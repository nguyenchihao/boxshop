import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DropdownItem from './DropdownItem';

SubMenu.propTypes = {
  category: PropTypes.object,
  setToggle: PropTypes.func
}
SubMenu.defaultProps = {
  category: {}
};
function SubMenu(props) {
  const { category, setToggle } = props
  const [subNav, setSubNav] = useState(false)
  return (
    <li className="sub-menu">
      <div className="mobile-item">
        <Link
          to={`/danh-muc/${category.slug}`}
          className="mobile-item__link"
          onClick={() => setToggle()}
        >
          {category.name}
        </Link>
        <span className={subNav ?
          "mobile-item__button active" :
          "mobile-item__button"
        }
          onClick={() => setSubNav(!subNav)}
        >
          <i className='bx bx-caret-down'></i>
        </span>
      </div>
      {
        category.children.length > 0 ?
          (
            <ul className={subNav ? "dropdown active" : "dropdown"}>
              {
                category.children.map((item, index) => {
                  return (
                    <DropdownItem
                      item={item}
                      key={index}
                      setToggle={setToggle}
                    />
                  )
                })
              }
            </ul>
          )
          : null
      }

    </li>
  )
}

export default SubMenu
