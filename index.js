const plusIcon = document.getElementById("plus-icon");
plusIcon.addEventListener("click", function(){
    handleProductChange(true);
});

const minusIcon = document.getElementById("minus-icon");
minusIcon.addEventListener("click",function(){
    handleProductChange(false);
})
function handleProductChange(isIncrease){
    const increment = document.getElementById("increment");
    const incrementNumber = parseInt(increment.value);
    let incrementNew = incrementNumber;
    if( isIncrease == true){
        incrementNew = incrementNumber +1;    }
    if( isIncrease == false && incrementNumber > 0){
        incrementNew = incrementNumber -1;
    }
    increment.value = incrementNew;
    const iphoneCost = incrementNew * 1219;
    document.getElementById("iphone-cost").innerText = iphoneCost;
    totalCalculate();
}


// const plusIcon = document.getElementById("plus-icon");
// plusIcon.addEventListener("click", function(){
//     const increment = document.getElementById("increment");
//     const incrementNumber = parseInt(increment.value);
//     const incrementNew = incrementNumber +  1  ;
//     increment.value = incrementNew;

//     const iphoneCost = incrementNew * 1219;
//     document.getElementById("iphone-cost").innerText = iphoneCost;
// });



// const minusIcon = document.getElementById("minus-icon");
// minusIcon.addEventListener("click",function(){
//     const increment = document.getElementById("increment");
//     const incrementNumber = parseInt(increment.value);
//     const incrementNew = incrementNumber -  1;
//     increment.value = incrementNew;

//     const iphoneCost = incrementNew * 1219;
//     document.getElementById("iphone-cost").innerText = iphoneCost;
// })


// Iphone casing cost starts 

// const PlusIcon2 = document.getElementById("plus-icon2");
// PlusIcon2.addEventListener("click",function(){
//     handlerProduct(true)
// })
// OR

   handlerProduct(true);

// const minusIcon2 = document.getElementById("minus-icon2");
// minusIcon2.addEventListener("click",function(){
//     handlerProduct(false)
// })
//OR 

    handlerProduct(false);

function handlerProduct(isIncrease){
    decrement = document.getElementById("decrement");
    const decrementNumber = parseInt(decrement.value);
    let decrementNew = decrementNumber;
    if ( isIncrease == true){
        decrementNew = decrementNumber +1;
    }
    if( isIncrease == false && decrementNumber > 0){
        decrementNew = decrementNumber -1;
    }
    decrement.value = decrementNew;
    const totalCost = decrementNew *59;
    document.getElementById("iphone-casing").innerText = totalCost;
    totalCalculate();

}

function totalCalculate(){
    const mobilePrice = document.getElementById("increment").value;
    const mobilePriceCount = parseInt(mobilePrice);

    const CasingPrice = document.getElementById("decrement").value;
    const CasingPriceCount = parseInt(CasingPrice);

    totalPrice = mobilePriceCount * 1219 + CasingPriceCount*59;
    document.getElementById("subTotal").innerText=totalPrice;
    document.getElementById('totalPrice').innerText=totalPrice;

    const tax = totalPrice / 7;
    const taxAmount = tax.toPrecision(4);
    document.getElementById("tax-amount").innerText= taxAmount;
}