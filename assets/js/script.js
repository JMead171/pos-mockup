let displayOrder = (e) => {
    let foodEl = "";
    let price = 0;
    let totalPrice = 0;
    switch (e.target.id) {
        case "cb":
            price = 8.95;
            foodEl = $('<p>').text(`Cheese Burger $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "cs":
            price = 7.95;
            foodEl = $('<p>').text(`Chicken Sandwich $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "blt":
            price = 7.95;
            foodEl = $('<p>').text(`BLT Sandwich $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "cp":
            price = 6.95;
            foodEl = $('<p>').text(`Cheese Pizza $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "cc":
            price = 7.95;
            foodEl = $('<p>').text(`Chicken Caesar $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "ch":
            price = 5.95;
            foodEl = $('<p>').text(`Chilli $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "ss":
            price = 9.95;
            foodEl = $('<p>').html(`Steak Sandwich <span class='tab4'>$${price}</span>`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "ft":
            price = 8.95;
            foodEl = $('<p>').text(`Fish Tacos    $${price}`).addClass('fs-6 orders bg-light bg-light tab4');
            $('#order').append(foodEl);
            break;
        case "hs":
            price = 5.95;
            foodEl = $('<p>').text(`House Salad $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "so":
            price = 2.95;
            foodEl = $('<p>').text(`Soft Drink $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "be":
            price = 4.95;
            foodEl = $('<p>').text(`Beer $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        case "wi":
            price = 6.95;
            foodEl = $('<p>').text(`Wine $${price}`).addClass('fs-6 orders bg-light');
            $('#order').append(foodEl);
            break;
        default:
            break;
    }
    $('.total-price').remove();
    let orderPrices = $('.orders');
    for ( let i = 0; i < orderPrices.length; i++) {
        console.log("Look ", orderPrices);
        let str = orderPrices[i].innerText;
        let value = str.slice(-4);
        totalPrice += parseFloat(value);
    }
    foodEl = $('<p>').html(`Your order total comes to <span class='tab4'>$${totalPrice.toFixed(2)}</span>`).addClass('h6 total-price');
    $('#total').append(foodEl);
}

$('button').click( function(e) {
    displayOrder(e);
});