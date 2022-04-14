import React from 'react'

function Foodal(props) {
    const { name, id, imgName_L, description} = props


    return (
        <>
            <div className="modal fade" id={`foodInfo${id}`} tabIndex="-1" aria-labelledby="foodInfoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered big-food modal-xl">
                    <div className="modal-content foodal">
                        <div className="modal-header">
                        
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row d-flex flex-column-reverse flex-md-row">
                                <div className="col">
                                    <img src={imgName_L} alt={name}/></div>
                                <div className="col">
                                    <h5 className="modal-title" id="foodInfoLabel">{ name }</h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foodal
