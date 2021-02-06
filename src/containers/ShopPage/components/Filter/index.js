import React from 'react'
import './Filter.scss'
const Filter = ({ sidebar, setSidebar, setSort, products }) => {
  return (
    <div className="filter">
      <div className="filter-left">
        <select
          className="filter-left__select"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="sort=''">Sắp xếp theo giá tiền </option>
          <option value="sort=price">Giá từ thấp đến cao</option>
          <option value="sort=-price">Giá từ cao đến thấp</option>
        </select>
      </div>
      <div className="filter-right">
        <div className="filter-right__result">
          <span>Hiển thị tất cả {products.length} kết quả</span>
        </div>
        <div className="filter-right__button" onClick={() => setSidebar(!sidebar)}>
          <span>Tìm kiếm</span>
          <i className='bx bx-menu'></i>
        </div>
      </div>
    </div>
  )
}

export default Filter
