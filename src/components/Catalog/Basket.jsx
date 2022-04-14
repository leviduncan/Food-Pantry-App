import React from 'react'

function Basket(props) {
    const { cartItems, onAdd, onRemove } = props
    // Define Order Summary
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.14
    const shippingPrice = itemsPrice > 2000 ? 0 : 50
    const totalPrice = itemsPrice + taxPrice + shippingPrice

    return (
        <div className="block bg-color p-3 mb-3">
            <h4>Cart Items</h4>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row mb-2 d-flex justify-content-between">
                    <small className="col d-flex">{item.name}</small>
                    <div className="col-2 d-flex justify-content-between">
                        <span className="badge badge-danger cart-btn" onClick={() => onRemove(item)}>-</span>
                        <span className="badge badge-primary cart-btn" onClick={() => onAdd(item)}>+</span>
                    </div>
                    <small className="col text-right">{item.qty} x ${item.price.toFixed(2)}</small>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr />
                    <div className="row px-3 mb-2 d-flex justify-content-between">
                        <div>Items Price</div>
                        <div className="">${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row px-3 mb-2 d-flex justify-content-between">
                        <div>Tax</div>
                        <div className="">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row px-3 mb-2 d-flex justify-content-between">
                        <div>Shipping</div>
                        <div className="">${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row px-3 mb-2 d-flex justify-content-between">
                        <div className="font-weight-bold">Total</div>
                        <div className="font-weight-bold">${totalPrice.toFixed(2)}</div>
                    </div>
                    <hr />
                    <button className="btn btn-primary" onClick={()=> alert('Check Process Initiated')}>Checkout</button>
                </>
            )}
        </div>
    )
}

export default Basket
