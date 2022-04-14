import React from 'react'

function Module1a() {
    return (
        <>
            <section className="m1a d-flex">
                <div className="container d-flex align-items-center justify-content-end">
                    <div className="col col-lg-6">
                        <h2>Our Food</h2>
                        <ul>
                            <li>
                                <p>Signature Pizzas</p>
                                <small>Choose one of our plans, enter delivery time.</small>
                            </li>
                            <li>
                                <p>Oven-Baked Subs</p>
                                <small>Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home!</small>
                            </li>
                            <li>
                                <p>Wings, Sides &amp; More</p>
                                <small>Choose one of our plans, enter delivery time.</small>
                            </li>
                        </ul>
                        <a href="/catalog" className="btn btn-primary">Our Food</a>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Module1a
