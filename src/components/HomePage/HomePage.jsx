import React from 'react'
import Hero from '../Hero/Hero'
import Modal from '../Modal/Modal'
import Section1 from './Section1'
import './HomePage.css'
import Section2 from './Section2'
import Section3 from './Section3'

function HomePage() {
    return (
        <>
        <Modal />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        </>
    )
}

export default HomePage
