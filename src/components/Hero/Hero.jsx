import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="hero d-flex">
                <div className="container d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <h1>Have no time to prepare <span className="text-gold">food</span>?</h1>
                        <p>Have no time to prepare food?</p>
                        <a href="/catalog" className="btn btn-primary">Order Food</a>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Hero
