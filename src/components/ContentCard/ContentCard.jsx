import React from 'react'
import './ContentCard.css'

function ContentCard(props) {
    return (
        <>
            <div className="col-12 col-md-4">
                <img className="ccard-img" src={props.img} alt=""/>
                <div className="ccard-header">{props.heading}</div>
                <div className="ccard-body">{props.content}</div>
            </div>
        </>
    )
}

export default ContentCard
