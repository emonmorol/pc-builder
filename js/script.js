function updatePrices(pruductId,price){
    const memoryPrice = document.getElementById(pruductId);
    memoryPrice.innerText = price;

    const bestPrice = document.getElementById('best-price');
    const memoryCost = document.getElementById('memory-cost');
    const storagePrice = document.getElementById('storage-cost');
    const deliveryPrice = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storagePrice.innerText) + parseFloat(deliveryPrice.innerText);
}

function getElement(elementId,updateId,price){
    document.getElementById(elementId).addEventListener('click',function(){
        updatePrices(updateId,price)
    })
}

getElement('sixteenGB','memory-cost',300);
getElement('eightGB','memory-cost',0);
getElement('ssd1','storage-cost',0);
getElement('ssd2','storage-cost',200);
getElement('ssd3','storage-cost',400);
getElement('free-delivery','delivery-cost',0);
getElement('paid-delivery','delivery-cost',20);

document.getElementById('apply-btn').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-input').value;
    let totalPrice = document.getElementById('total-price');
    const allPrice = parseFloat(totalPrice.innerText);
    if( promoInput === 'emon20' && isUsed == false){
        const discount = parseFloat(totalPrice.innerText) * 0.2 ;
        totalPrice.innerText = allPrice - discount ;
        const couponINput = document.getElementById('applied-text');
        couponINput.innerText = 'Coupon Apllied'
        isUsed = true;
    }
    else{
        document.getElementById('coupon').innerText = 'Cant Aplly THis Coupon';
    }
})

let isUsed = false ;