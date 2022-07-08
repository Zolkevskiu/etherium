const footer_wrap = document.querySelector('.footer-history')

setInterval(() => {
    let numGenerator = (number, index)=> {
        var text = "";
        var possible = number;
    
        for( var i=0; i < index; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function numGeneratorCost () {
        var text = "";
        var possible = "1234567890";
    
        for( var i=0; i < 3 ; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    let numberCost = numGeneratorCost()
    let col = document.createElement('div')
    col.innerHTML = `
    <div class="footer-history-col">
    <img src="img/checked-footer.png" alt="" class="checked-footer">
    <span class="history-col-text_TxHash">${numGenerator("abcdefghijklmnopqrstuvwxyz0123456789", 10)}..</span>
    <span class="history-col-text-number_block">${numGenerator("0123456789", 6)}</span>
    <div class="history-col-text_from">
        <span class="history-col-text_from_in">${numGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 7)}...</span>
        <span class="history-col-text">${numGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 7)}...</span>
    </div>
    <div class="history-col-text_to">
        <span class="history-col-text_from_in">${numGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 7)}...</span>
        <span class="history-col-text">${numGenerator("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 7)}...</span>
    </div>
    <div class="history-col-text_value">
        <span class="history-col-text-border">${numberCost * 2} ETH</span>
        <span class="history-col-text">${numberCost} ETH</span>
    </div>
    <span class="history-col-text history-col-text-fee">0.0000${numGenerator("1234567890000", 3)}</span>
    <span class="history-col-text_time">right now</span>
</div>`
footer_wrap.prepend(col)
}, 5000);