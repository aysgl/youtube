import React from 'react'
import { useNavigate } from 'react-router'

const Search = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/results?search_query=${e.target[0].value}`)
    }
    return (
        <form onSubmit={handleSubmit} className='d-inline-flex search-wrapper'>
            <div className="input-group search">
                <span className="search-span input-group-text rounded-pill d-none" id="basic-addon1">
                    <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control rounded-pill" placeholder="Ara" aria-label="ara" aria-describedby="basic-addon1" />
                <span className="input-group-text rounded-pill" id="basic-addon1">
                    <i className="bi bi-search"></i>
                </span>
            </div>
            <div className='speaker'>
                <i className="bi bi-mic-fill"></i>
            </div>
        </form>
    )
}

export default Search