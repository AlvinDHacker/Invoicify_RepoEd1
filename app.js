// inputs

const priceInput = document.getElementById('price-input');
const quantityIput = document.getElementById('quantity-input');
const vatInput = document.getElementById('vat-input');

// buttons

const successButton = document.getElementById('btn-success');
const resetButton = document.getElementById('btn-reset');

// Results

const finalCostInput = document.getElementById('dynamic__cost');
const message = document.getElementById('cost_text')

function calculateTotalCost() {

    let price, qty, vat, subTotal, total;

    price = Number(priceInput.value);
    qty   = Number(quantityIput.value);
    vat   = Number(vatInput.value);

    subTotal = price * qty;

    total = subTotal + (subTotal * vat) / 100;
    
    finalCostInput.textContent = total.toFixed(2)

    let msg = showMessage(total);

    message.textContent = msg

}



function showMessage(cost) {
    if (cost < 100) {
        return "Cost is Cheap";
    } else if (cost >= 100 && cost < 500) {
        return "Cost is medium";
    }else if (cost >= 500 && cost < 1000) {
        return "Cost is high";
    } else if (cost >= 1000 && cost <= 5000) {
        return "Cost is expensive";
    } else {
        return "cost is super expensive";
    }
}


function reset() {
    priceInput.value = ""
    quantityIput.value = ""
    vatInput.value = ""
    finalCostInput.textContent = "_____________________"
    message.textContent = ""
}




function handleEvent() {
    if(Number(priceInput.value) && Number(quantityIput.value) && Number(vatInput.value)) {
        calculateTotalCost()
    } else {
        alert('Give some valid inputs first and try again!');
        reset()
    }

}


successButton.addEventListener('click', handleEvent);
resetButton.addEventListener('click', reset)