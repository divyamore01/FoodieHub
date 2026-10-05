function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("foodieCart")) || [];

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("foodieCart", JSON.stringify(cart));

    alert(name + " added to cart!");
}