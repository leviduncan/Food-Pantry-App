import React from 'react'
import logo from '../../assets/logo.svg'

function FooterMain() {
    return (
        <div className="d-flex py-5">
            <div className="col col-sm-6 col-lg-3">
                <img src={logo} alt="Food Pantry Logo" />
            </div>
            <div className="col col-sm-6 col-lg-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nobis.</div>
            <div className="col col-sm-6 col-lg-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nobis.</div>
            <div className="col col-sm-6 col-lg-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nobis.</div>
        </div>
    )
}

export default FooterMain
