import React, { useEffect, useState } from 'react';
import { checkItemInCart } from './helper/cartHelper';
import { useCart } from "./helper/store";

const MedicineCard = ({ element, addedInCart }) => {
    const [isInCart, setIsInCart] = useState(addedInCart);
    const { cartDispatch } = useCart();

    const clickHandler = (added) => {
        setIsInCart(added);
        let type = added ? "addItemToCart" : "removeItemFromCart";
        cartDispatch({ type: type, item: element });
    }

    return (
        <>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <div className="container">
                    <div>
                        <h5>
                            <span className="itemName">{element.name}</span>
                            <span className="itemPrice">₹ {element.price}</span>
                        </h5>
                        <h5>
                            <span className="itemDisease">{element.disease}</span>
                            {
                                element.prescriptionNeeded &&
                                <span className="itemPrescriptionNeeded">"Rx required"</span>
                            }
                        </h5>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col itemManufacturer"><em>Mfr: {element.manufacturer}</em></div>
                        <div className="col">
                            <div className="row">
                                <div className="col itemQuantity">
                                    QTY:
                                    <input type="number" min="1" defaultValue="1" />
                                </div>
                                {
                                    isInCart
                                        ? <button className="col text-uppercase btn btn-danger text-light" onClick={() => clickHandler(false)}><strong>Remove</strong></button>
                                        : <button className="col text-uppercase btn theme-bg text-light" onClick={() => clickHandler(true)}><strong>Add to Cart</strong></button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MedicineCard;
