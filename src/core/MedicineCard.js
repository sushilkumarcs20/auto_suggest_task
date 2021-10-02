import React, { useEffect, useRef, useState } from 'react';
import { checkItemInCart } from './helper/cartHelper';
import { useCart } from "./helper/store";
import "./../assets/css/medicine-card.css";

const MedicineCard = ({ element, addedInCart }) => {
    const medQuan = useRef(null);
    const [isInCart, setIsInCart] = useState(checkItemInCart(element));
    const { cartState, cartDispatch } = useCart();

    const clickHandler = (added) => {
        stateUpdater(added);
    }

    const stateUpdater = async (added) => {
        let type = added ? "addItemToCart" : "removeItemFromCart";
        await cartDispatch({ type: type, item: { medicine: element, quantity: parseInt(medQuan.current.value) } });
        setIsInCart(checkItemInCart(element))
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
                                    <input ref={medQuan} type="number" min="1" defaultValue="1" />
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
