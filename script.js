document.querySelectorAll('input[type="checkbox"]').forEach(item => {
    item.addEventListener('change', calculateTotal);
});

document.getElementById('payment').addEventListener('input', calculateChange);

function calculateTotal() {
    let total = 0;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
        total += parseFloat(item.value);
    });
    document.getElementById('total').textContent = total.toFixed(2);
    calculateChange();
}

function calculateChange() {
    let total = parseFloat(document.getElementById('total').textContent);
    let payment = parseFloat(document.getElementById('payment').value);
    let change = payment - total;
    document.getElementById('troco').textContent = (change > 0 ? change : 0).toFixed(2);
}
