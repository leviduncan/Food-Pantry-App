import React from 'react'
import MBG from '../../assets/food/mbg.jpg'
import WriteUp from '../WriteUp/WriteUp'
import FooterMain from './FooterMain'
import Mbg from './Mbg'

function Footer() {
    return (
        <>
        <div className="container">
        <hr />
            <WriteUp />
        </div>
        <hr />
            <div className="container">
                <Mbg mbg={MBG}/>
            </div>
            <div className="footer-main">
                <div className="container">
                    <FooterMain />
                </div>
            </div>
        </>
    )
}

export default Footer
