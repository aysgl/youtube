import React, { useContext } from 'react'
import categories from "../../utils/data/menu/categories"
import discover from "../../utils/data/menu/discover"
import content from "../../utils/data/menu/content"
import others from "../../utils/data/menu/others"
import Logo from '../../assets/logo.svg'
import { YoutubeContext } from '../../context/youtubeContext'

const Offcanvas = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext)

  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <div className='d-flex align-items-center'>
          <button className="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon opacity-1"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src={Logo} />
          </a>
        </div>
      </div>
      <div className="offcanvas-body pt-0">
        <ul className="list-group list-group-flush mb-4 pb-3 border-bottom">
          {categories.map((i, index) =>
            <li key={index} className={`list-group-item ${selectedCategory.name === i.name ? "active" : ""}`} onClick={() => setSelectedCategory(i)}>
              <i className={i.icon}></i>
              <a href="#">{i.name}</a>
            </li>
          )}
        </ul>
        <p className='h6'>Keşfet</p>
        <ul className="list-group list-group-flush mb-4 pb-3 border-bottom">
          {discover.map((i, index) =>
            <li key={index} className={`list-group-item ${selectedCategory.name === i.name ? "active" : ""}`} >
              <i className={i.icon}></i>
              <a href="#">{i.name}</a>
            </li>
          )}
        </ul>
        <p className='h6'>YouTube'dan daha fazla içerik</p>
        <ul className="list-group list-group-flush mb-4 pb-3 border-bottom">
          {content.map((i, index) =>
            <li key={index} className={`list-group-item ${selectedCategory.name === i.name ? "active" : ""}`} >
              <i className={i.icon}></i>
              <a href="#">{i.name}</a>
            </li>
          )}
        </ul>
        <ul className="list-group list-group-flush mb-4 pb-3 border-bottom">
          {others.map((i, index) =>
            <li key={index} className="list-group-item">
              <i className={i.icon}></i>
              <a href="#">{i.name}</a>
            </li>
          )}

        </ul>
      </div>
    </div>
  )
}

export default Offcanvas