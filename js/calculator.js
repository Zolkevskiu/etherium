const range = document.querySelector('.deposit-range');
const profit_result = document.querySelector('.profit-result');
const button = document.querySelectorAll('.deposit-btn');
const price = document.querySelector('.top-col_price-from');
const result = document.querySelector('.top-col_price-to');
//events
range.addEventListener("change", ()=> {
    result.innerHTML = range.value * 2 + (' ETH');
    price.innerHTML = range.value + (' ETH');
    profit_result.innerHTML = range.value * 2 + (' ETH');
})
range.addEventListener("focus", ()=> {
    range.addEventListener("mousemove", ()=> {
        result.innerHTML = range.value * 2 + (' ETH');
        price.innerHTML = range.value + (' ETH');
        profit_result.innerHTML = range.value * 2 + (' ETH');
    })
})
range.addEventListener("blur", ()=> {
    range.addEventListener("mouseleave", ()=> {
        result.innerHTML = range.value * 2 + (' ETH');
        price.innerHTML = range.value + (' ETH');
        profit_result.innerHTML = range.value * 2 + (' ETH');
    })
})
//navigation calculator
let deposit_btn = (num) => {
    price.innerHTML = num + (' ETH');
    result.innerHTML = num * 2 + (' ETH');
    range.value = num;
    profit_result.innerHTML = range.value * 2 + (' ETH');
}
button.forEach((item) => {
    item.addEventListener("click", ()=> {

        button.forEach((e) => {
            e.classList.remove('button-active');
        });
        item.classList.add('button-active');
    });
});