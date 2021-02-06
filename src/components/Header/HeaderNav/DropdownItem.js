import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
DropdownItem.propTypes = {
  item: PropTypes.object
}
DropdownItem.defaultProps = {
  item: {}
};
function DropdownItem({ item }) {
  return (
    <li className="dropdown-item">
      <Link to={`/danh-muc/${item.slug}`} className="dropdown-item__link" >
        {item.name}
      </Link>
    </li>
  )
}

export default DropdownItem
