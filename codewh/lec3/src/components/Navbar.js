import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {


    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <Link className="navbar-brand" to="#">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">{props.kuchbhi} <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        <button type="button" id="b" className="btn btn-primary mx-2" onClick={()=>props.toggleMode('primary')}>Blue</button>
                        <button type="button" id="g" className="btn btn-success mx-2" onClick={()=>props.toggleMode('success')}>Green</button>
                        <button type="button" id="r" className="btn btn-danger mx-2" onClick={()=>props.toggleMode('danger')}>Red</button>
                        <button type="button" id="y" className="btn btn-warning mx-2" onClick={()=>props.toggleMode('warning')}>Yellow</button>

                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
Navbar.propTypes = {
    title: propTypes.string,
    kuchbhi: propTypes.string
}

Navbar.defaultProps = {
    title: "set title here",
    kuchbhi: "set kuchbhi here"
}