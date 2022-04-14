import React from 'react'

function Header(props) {
    const { countCartItems } = props
    return (
        <>
            <div className="top-bar">
                <nav className="navbar navbar-dark bg-dark mb-3 block pr-3">
                    <div className="navbar-brand"></div>
                    <div className="navbar-text"><i class="fas fa-shopping-cart text-white"></i> <span className="badge badge-warning">{ countCartItems }</span></div>
                </nav>
            </div>
        </>
    )
}

export default Header
