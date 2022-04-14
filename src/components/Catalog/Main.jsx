import React from 'react'
import Product from './Product'

function Main(props) {
    const { products, onAdd } = props
    return (
        <div className="block p-3 mb-5">
            <h4>Food Catalog</h4>
            <div className="row d-flex justify-content-between">
                {products.map((product) => (
                    <>
                        <Product key={product.id} product={product} onAdd={onAdd}/>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Main
