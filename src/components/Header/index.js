import React, { useContext } from 'react'
import Logo from '../../assets/logo.svg'
import Offcanvas from '../Offcanvas'
import Search from '../Search'
import categories from '../../utils/data/menu/categories'
import { YoutubeContext } from '../../context/youtubeContext'
import { Link } from 'react-router-dom'

const Header = () => {
    const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext)

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className='d-flex align-items-center'>
                    <button className="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon opacity-1"></span>
                    </button>
                    <Link to="/" className="navbar-brand" >
                        <img src={Logo} alt='' />
                    </Link>
                </div>

                <div className='mt-5 menu'>
                    {categories.map((i, index) =>
                        <div key={index} className="menu-item" onClick={() => setSelectedCategory(i)}>
                            <i className={i.icon}></i>
                            <p>{i.name}</p>
                        </div>
                    ).slice(0, 4)}
                </div>

                <Search />

                <div className='dropdown-list d-inline-flex'>
                    <div>
                        <i className="bi bi-camera-video"></i>
                    </div>
                    <div>
                        <i className="bi bi-bell"></i>
                    </div>
                    <div className='username'>
                        <div className='username-img'>
                            <img src='https://picsum.photos/50/50' alt='' />
                        </div>
                    </div>
                </div>

                <Offcanvas />
            </div>
        </nav>
    )
}

export default Header