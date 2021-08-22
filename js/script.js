//extraMemoryCostFunction
function getExtraMemoryCost(cost, element) {
    const basePrice = cost;
    const extraFetureCost = document.getElementById(element);
    extraFetureCost.innerText = parseInt(basePrice);
}

//totalCostfunction

function totalPrice() {
    // first all type o data collect from html file
    let basePriceText = document.getElementById('base-price');
    let basePrice = parseFloat(basePriceText.innerText);
    let memoryCostText = document.getElementById('memory-cost');
    let memoryCost = parseFloat(memoryCostText.innerText);
    let storageCostText = document.getElementById('storage-cost');
    let storageCost = parseFloat(storageCostText.innerText);
    let deliveryChargetext = document.getElementById('delivery-cost');
    let deliveryCharge = parseFloat(deliveryChargetext.innerText);

    let subTotal = document.getElementById('sub-total');
    let finalPrice = document.getElementById('total-price')



    let totalCost = basePrice + memoryCost + storageCost + deliveryCharge;

    subTotal.innerText = totalCost;
    finalPrice.innerText = totalCost;

    return totalCost;
}



//Extra memory amount
document.getElementById('memory8').addEventListener('click', function() {
    getExtraMemoryCost(0, 'memory-cost');
    totalPrice();
    const customFont = document.getElementById('memory-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'
    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'
});
document.getElementById('memory16').addEventListener('click', function() {
    getExtraMemoryCost(180, 'memory-cost');

    totalPrice();
    const customFont = document.getElementById('memory-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'
    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'




});

//Extra storage amount
function getExtraStorageCost(cost) {
    const basePrice = cost;
    const extraFetureCost = document.getElementById('storage-cost');
    extraFetureCost.innerText = parseInt(basePrice);
}
//Extra Delivery optioin
document.getElementById('storage256').addEventListener('click', function() {
    getExtraStorageCost(0);
    totalPrice();
    const customFont = document.getElementById('storage-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'

    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'

})
document.getElementById('storage512').addEventListener('click', function() {
    getExtraStorageCost(100);
    totalPrice();
    const customFont = document.getElementById('storage-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'
    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'
})
document.getElementById('storage1TB').addEventListener('click', function() {
    getExtraStorageCost(180);
    totalPrice();
    const customFont = document.getElementById('storage-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'
    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'
})

//extraFastDelivaryCostFunction
function getDelivaryCost(cost) {
    const basePrice = cost;
    const extraFetureCost = document.getElementById('delivery-cost');
    extraFetureCost.innerText = parseInt(basePrice);
}

document.getElementById('prime-delivery').addEventListener('click', function() {
    getDelivaryCost(0);
    totalPrice();

    const customFont = document.getElementById('delivery-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'
    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'
})

document.getElementById('fast-delivery').addEventListener('click', function() {
    getDelivaryCost(20);
    totalPrice();
    const customFont = document.getElementById('delivery-cost');
    customFont.style.color = 'rgb(109, 187, 187)'
    customFont.style.fontWeight = '900'
    const subtotal = document.getElementById('sub-total');
    subtotal.style.color = 'green'
    subtotal.style.fontWeight = '900'
})

//addCuponCode

document.getElementById('apply-cupon').addEventListener('click', function() {
    let addCuponCode = document.getElementById('cupon-code');

    if (addCuponCode.value == 'stevekaku') {
        let subTotatext = document.getElementById('sub-total');
        let subTotal = parseFloat(subTotatext.innerText);
        let discountAmount = (subTotal * 20) / 100;
        finalTotal = subTotal - discountAmount;
        let finalPrice = document.getElementById('total-price');

        finalPrice.innerText = finalTotal;


    }
})