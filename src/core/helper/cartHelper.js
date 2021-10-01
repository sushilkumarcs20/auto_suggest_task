export const addItemToCart = (item) => {
    let cart = [];
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        if (cartStorage) {
            cart = JSON.parse(cartStorage);
            if (!checkItemInCart(item)) {
                cart.push(item);
                localStorage.removeItem('cart');
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                return;
            }
        } else {
            cart.push(item);
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
};

export const removeItemFromCart = (item) => {
    if (typeof window !== undefined) {
        let cartStorage = localStorage.getItem('cart');
        let cart = [];
        if (cartStorage) {
            cart = JSON.parse(cartStorage);
            let updatedCart = cart.filter(element => {
                return element.name !== item.name;
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
                if (element.name === item.name) {
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
                amount = amount + element.price;
            });
        }
        return {amount: amount, count: cart.length};
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