import React, { useReducer, useContext } from "react";
import { addItemToCart, removeItemFromCart, cartDetail } from "./cartHelper";
import { getData, autoPopulate } from "./medicineData";

const CartContext = React.createContext();
const MedicineContext = React.createContext();

let cart = cartDetail();
const initialCartState = {
    amount: cart.amount,
    count: cart.count
}

const initialMedicineState = {
    term: '',
    data: getData('')
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "addItemToCart":
            if (!action.item) {
                return state;
            }
            addItemToCart(action.item);
            cart = cartDetail();
            return { count: cart.count, amount: cart.amount };
        case "removeItemFromCart":
            if (!action.item) {
                return state;
            }
            removeItemFromCart(action.item);
            cart = cartDetail();
            return { count: cart.count, amount: cart.amount };
        case "getCartDetail":
            cart = cartDetail();
            return { count: cart.count, amount: cart.amount };
        default:
            return state;
    }
}

const medicineReducer = (state, action) => {
    switch (action.type) {
        case "getMatchedItems":
            if (!action.term) {
                return { data: getData('')};
            }
            return { data: getData(action.term), term: action.term };
        case "loadLocalStorage":
            const msg = autoPopulate();
            return { data: getData(''), term: action.term, res: msg };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    const value = { cartState: state, cartDispatch: dispatch };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const MedicineProvider = ({ children }) => {
    const [state, dispatch] = useReducer(medicineReducer, initialMedicineState);
    const value = { medicineState: state, medicineDispatch: dispatch };
    return <MedicineContext.Provider value={value}>{children}</MedicineContext.Provider>
}

export const CommonProvider = ({ children }) => {
    return (
        <CartProvider>
            <MedicineProvider>{children}</MedicineProvider>
        </CartProvider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be within a CartProvider');
    }
    return context;
}

export const useMedicine = () => {
    const context = useContext(MedicineContext);
    if (context === undefined) {
        throw new Error('useMedicine must be inside a Medicine Provider');
    }
    return context;
}
