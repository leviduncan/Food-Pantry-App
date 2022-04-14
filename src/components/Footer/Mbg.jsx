import React from 'react'

function Mbg(props) {
    const { mbg } = props
    return (
        <div className="row">
            <div className="col mbg d-flex align-items-center justify-content-center pb-5">
                <img src={mbg} alt="Money Back Guaranteed" />
                <h4 className="pt-4">We Guarantee Your Satisfaction</h4>
            </div>
        </div>
    )
}

export default Mbg
