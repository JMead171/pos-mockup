let displayOrder = (e) => {
    let foodEl = "";
    let priceEl = e.target.previousElementSibling.previousElementSibling.innerText;
    let price = parseFloat(priceEl.replace('$', ""));
    let totalPrice = 0;
    switch (e.target.id) {
        case "cb":
            foodEl = $('<p>').html(`Cheese Burger <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "cs":
            foodEl = $('<p>').html(`Chicken Sandwich <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "blt":
            foodEl = $('<p>').html(`BLT Sandwich <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "cp":
            foodEl = $('<p>').html(`Cheese Pizza <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "cc":
            foodEl = $('<p>').html(`Chicken Caesar <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "ch":
            foodEl = $('<p>').html(`Chilli <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "ss":
            foodEl = $('<p>').html(`Steak Sandwich <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "ft":
            foodEl = $('<p>').html(`Fish Tacos <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "hs":
            foodEl = $('<p>').html(`House Salad <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "so":
            foodEl = $('<p>').html(`Soft Drink <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "be":
            foodEl = $('<p>').html(`Beer <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "wi":
            foodEl = $('<p>').html(`Wine <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        default:
            break;
    }
    $('.total-price').remove();
    $('.clear').remove();
    let orderPrices = $('.orders');
    for ( let i = 0; i < orderPrices.length; i++) {
        let str = orderPrices[i].innerText;
        let value = str.slice(-4);
        totalPrice += parseFloat(value);
    }
    foodEl = $('<p>').html(`Your order total: <span class='tab4'>$${totalPrice.toFixed(2)}</span>`).addClass('h6 bg-secondary text-white total-price');
    $('#total').append(foodEl);
    let divEl = $('<div id="reset">').addClass('clear');
    $('#total').append(divEl);
    let buttonEl = $(`<button type='button'>`).html(`Clear Order`).addClass('btn btn-danger btn-sm btnClear ');
    $('.clear').append(buttonEl);
    let buttonE2 = $(`<button type='button'>`).html(`Submit Order`).addClass('btn btn-warning btn-sm btnSubmit');
    $('.clear').append(buttonE2);

}

$('button').click( function(e) {
    displayOrder(e);
});

$(document).on('click', '.btnClear', function(){
    window.location.reload()
});

$(document).on('click', '.btnSubmit', function(){
    let date = new Date()
    let mon = date.getMonth();
    let month = mon + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let hour ="", min = "", sec = "";
    let hstr = h.toString();
    let mstr = m.toString();
    let sstr = s.toString()
    hstr.length < 2 ? hour = "0" + hstr : hour = hstr;
    mstr.length < 2 ? min = "0" + mstr : min = mstr;
    sstr.length < 2 ?  sec = "0" + sstr : sec = sstr;
    let orderDate = `${month}/${day}/${year} ${hour}:${min}:${sec}` 
    let orderEl = $(`<p>`).html(`Your order was sent to the kitchen on ${orderDate}`).addClass('orderSent');
    $('.clear').append(orderEl);
});
       