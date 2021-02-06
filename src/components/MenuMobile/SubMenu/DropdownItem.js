import React from 'react';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {
  const { item, setToggle } = props
  return (
    <li className="dropdown-item">
      <Link onClick={() => setToggle()} to={`/danh-muc/${item.slug}`} className="dropdown-item__link">
        {item.name}
      </Link>
    </li>
  );
}

export default DropdownItem;
