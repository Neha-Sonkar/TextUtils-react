import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-check-inline  mt-2">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="redtheme" value="red"/>
                    </div>
                    <div className="form-check form-check-inline mt-2">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="greentheme" value="green"/>
                    </div>
                    <div className="form-check form-check-inline mt-2">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="purpletheme" value="purple" />
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" >Enable {`${props.mode==='light'?'Dark':'Light'}`} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
Navbar.propTypes = {
    title: PropTypes.string
}