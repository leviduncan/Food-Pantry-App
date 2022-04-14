import React from 'react'
import Hero2 from '../Hero2/Hero2'
import wl from '../../assets/food/wl6.jpg'
import Modal from '../Modal/Modal'

function AboutPage() {
    const title = 'About Food Pantry'
    const subTitle = 'Have no time to prepare food?'
    return (
        <>
        <Modal />
            <div className="container about">
                <Hero2 title={title} subTitle={subTitle} /> 
                <div className="row d-flex">
                    <div className="col-12 col-md-6">
                        <img classname="wl" src={wl} alt="Lose weight" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas natus doloremque, laborum quae laudantium optio nihil possimus, recusandae ducimus quam dolore? Nulla nesciunt laboriosam libero voluptates similique eum recusandae nobis. Ducimus harum earum eveniet voluptates voluptas labore? Molestiae eligendi ab dolorum eos odit numquam porro.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, quod odit vitae quaerat unde facere error voluptatum ratione? Quia fugit voluptate odit voluptatum rerum dignissimos placeat debitis, ut aspernatur necessitatibus.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
