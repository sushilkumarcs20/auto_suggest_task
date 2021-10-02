export const addItemToCart = (item) => {
    let cart = [];
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        if (cartStorage) {
            cart = [...JSON.parse(cartStorage)];
            if (checkItemInCart(item.medicine)) {
                return;
            }
        }

        cart.push(item);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export const removeItemFromCart = (item) => {
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        let cart = [];
        if (cartStorage) {
            cart = [...JSON.parse(cartStorage)];
            let updatedCart = [];
            cart.forEach(element => {
                if (element.medicine.name === item.medicine.name) {
                    const removeQuan = parseInt(item.quantity);
                    const existingQuan = parseInt(element.quantity);
                    if (existingQuan > removeQuan) {
                        let resObject = { medicine: element.medicine, quantity: (existingQuan - removeQuan) }
                        updatedCart.push(resObject);
                    }
                } else {
                    updatedCart.push(element);
                }
            })
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    }
}

export const checkItemInCart = (item) => {
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        let cart = [];
        let found = false;
        if (cartStorage) {
            cart = JSON.parse(cartStorage);
            cart.forEach(element => {
                if (element.medicine.name === item.name) {
                    found = true;
                }
            });
        }
        return found;
    }
}

export const cartDetail = () => {
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        let cart = [];
        let amount = 0;
        if (cartStorage) {
            cart = JSON.parse(cartStorage);
            cart.forEach(element => {
                amount = amount + (element.medicine.price * element.quantity);
            });
        }
        return { amount: amount, count: cart.length };
    }
}

export const countItemsInCart = () => {
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        let cart = [];
        if (cartStorage) {
            cart = JSON.parse(cartStorage);
            return cart.length;
        }
        return 0;
    }
}