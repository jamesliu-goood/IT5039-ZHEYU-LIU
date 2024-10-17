document.getElementById('calculateButton').addEventListener('click', () => {
    const salary = parseFloat(document.getElementById('salary').value);
    
    if (isNaN(salary) || salary <= 0) {
        alert('Please enter a valid annual income.');
        return;
    }
    
    const tax = calculateTax(salary);
    document.getElementById('result').innerText = `Your estimated tax is: $${tax.toFixed(2)}`;
});

function calculateTax(income) {
    let tax = 0;

    // Simple tax brackets logic
    if (income <= 10000) {
        tax = income * 0.1;
    } else if (income <= 50000) {
        tax = 10000 * 0.1 + (income - 10000) * 0.2;
    } else {
        tax = 10000 * 0.1 + 40000 * 0.2 + (income - 50000) * 0.3;
    }

    return tax;
}
