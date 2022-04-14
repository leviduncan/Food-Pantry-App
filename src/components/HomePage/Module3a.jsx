import React from 'react'
import ContentCard from '../ContentCard/ContentCard'
import target from '../../assets/target.svg'
import confetti from '../../assets/confetti.svg'
import man from '../../assets/man.svg'

function Module3a() {

    const data = [
        {
            title: "Focused Meals for you",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: target
        },
        {
            title: "Celebrate every win",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: confetti
        },
        {
            title: "Tailored caoching",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img: man
        },
    ]

    return (
        <>
            <section className="m3a d-flex">
                <div className="container d-flex align-items-center justify-content-end">
                    <div className="col text-center">
                        <h3 className="">Reach Your Goals, Stay Motivated</h3>
                        <h4>This is what you need to succeed!</h4>
                        <div className="row my-5">
                            {data.map((val, idx) => {
                                return (
                                    <>
                                        <ContentCard key={idx} img={val.img} heading={val.title} content={val.content}/>
                                    </>
                                )
                            })}
                        </div>
                        <button className="btn btn-primary">Let's Go!</button>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default Module3a
