import React from 'react'
import Foodal from './Foodal'

function Product(props) {
    const { product, onAdd } = props
    return (
        <div className="card col-12 col-sm-6 col-lg-4">
            <img src={product.image} className="card-img-top small food-img" alt={product.name} data-toggle="modal" data-target={`#foodInfo${product.id}`} />
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary btn-block"  onClick={() => onAdd(product)}>Add To Cart</button>
            </div>


            {/* <!-- Modal --> */}
            <Foodal name={product.name} key={product.id}  id={product.id} imgName={product.img_name} imgName_L={product.image_L} description={product.desc} />
        </div>
    )
}

export default Product
