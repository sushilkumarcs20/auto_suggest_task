import React, { useRef, useState } from 'react';
import { checkItemInCart } from './helper/cartHelper';
import { useCart } from "./helper/store";
import "./../assets/css/medicine-card.css";

const MedicineCard = ({ element }) => {
    const medQuan = useRef(null);
    const [isInCart, setIsInCart] = useState(checkItemInCart(element));
    const { cartDispatch } = useCart();

    const clickHandler = (added) => {
        stateUpdater(added);
    }

    const stateUpdater = async (added) => {
        let type = added ? "addItemToCart" : "removeItemFromCart";
        await cartDispatch({ type: type, item: { medicine: element, quantity: parseInt(medQuan.current.value) } });
        setIsInCart(checkItemInCart(element))
    }

    const titleCase = (str) => {
        let words = str.toLowerCase().split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length);
        }

        return words.join(" ");
    }

    return (
        <>
            <div className="card-body">
                <div className="container">
                    <div>
                        <h5>
                            <span className="itemName">{titleCase(element.name)}</span>
                            <span className="item-price">₹ {element.price}</span>
                        </h5>
                        <h5>
                            <span className="item-disease">{titleCase(element.disease)}</span>
                            {
                                element.prescriptionNeeded &&
                                <span className="item-prescription-needed">Rx required</span>
                            }
                        </h5>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-12 col-sm item-manufacturer"><em>Mfr: {element.manufacturer}</em></div>
                        <div className="col-12 col-sm cart-func-div">
                            <div className="row">
                                <div className="col item-quantity">
                                    QTY:
                                    <input ref={medQuan} type="number" min="1" defaultValue="1" />
                                </div>
                                {
                                    isInCart
                                        ? <button className="col col-sm text-uppercase btn btn-danger text-light" onClick={() => clickHandler(false)}><strong>Remove</strong></button>
                                        : <button className="col col-sm text-uppercase btn theme-bg text-light" onClick={() => clickHandler(true)}><strong>Add to Cart</strong></button>
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
