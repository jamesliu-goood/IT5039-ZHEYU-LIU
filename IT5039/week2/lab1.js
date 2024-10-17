let cartQuantity = 0;

document.getElementById('showQuantity').addEventListener('click', () => {
    alert(`Cart Quantity: ${cartQuantity}`);
});

document.getElementById('addToCart').addEventListener('click', () => {
    cartQuantity++;
    updateQuantity();
});

document.getElementById('addTwo').addEventListener('click', () => {
    cartQuantity += 2;
    updateQuantity();
});

document.getElementById('addThree').addEventListener('click', () => {
    cartQuantity += 3;
    updateQuantity();
});

document.getElementById('resetCart').addEventListener('click', () => {
    cartQuantity = 0;
    updateQuantity();
});

function updateQuantity() {
    document.getElementById('cartQuantity').innerText = `Cart Quantity: ${cartQuantity}`;
}
