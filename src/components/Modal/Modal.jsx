import React from 'react'
import './Modal.css'

function Modal() {
    return (
        <>
           {/* <!-- Button trigger modal --> */}
            <div type="button" className="w-auto p3 promo-container" data-toggle="modal" data-target="#exampleModal">
                <div className="container text-dark">
                    <div className="text-center"><strong>You Can't Lose with Today's Special:</strong> 75% OFF + FREE SHIPPING!</div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">50% OFF SAVINGS FOR THE CRAVINGS</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ul className="list-checked">
                        <li><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Rerum commodi perferendis debitis quia. Nulla odio ad, incidunt laudantium iusto vel?</li>
                        <li><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Nostrum laboriosam possimus at aut laudantium? Maxime similique ea corrupti veniam, est ex. Quaerat, velit voluptatibus! Distinctio porro sequi quaerat, delectus asperiores vero perferendis amet ex corrupti.</li>
                        <li><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong> Perspiciatis ducimus nisi, asperiores, odit neque quos cumque sequi optio similique sit dignissimos deleniti, fugit officia explicabo consequuntur molestiae. Optio saepe dignissimos a sapiente, minima magnam, alias asperiores nam, molestiae non assumenda aliquid! Cumque, autem alias eveniet rem facere culpa fugiat ab.</li>
                    </ul>
                </div>
                </div>
            </div>
            </div> 
        </>
    )
}

export default Modal
