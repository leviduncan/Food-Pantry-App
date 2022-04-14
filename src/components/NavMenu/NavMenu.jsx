import React, { useState } from 'react'
import './NavMenu.css'
import logo from '../../assets/logo.svg'

function NavMenu() {
    const [navbar, setNavbar] =useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <div className={navbar ? "navmenu active" : "navmenu"}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} alt="our logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link mx-4" href="/about">About</a>
                            <a className="nav-link mx-4" href="/catalog">Our Foods</a>
                            <a className="nav-link mx-4" href="/plans">Our Plans</a>
                            <a className="btn btn-primary " href="/contact">Contact Us</a>
                            
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavMenu
