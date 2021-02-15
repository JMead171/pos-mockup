let displayOrder = (e) => {
    let foodEl = "";
    let price = 0;
    let totalPrice = 0;
    switch (e.target.id) {
        case "cb":
            price = 8.95;
            foodEl = $('<p>').text(`Cheese Burger $${price}`).addClass('.fs-6 orders');
            $('#order').append(foodEl);
            break;
        case "cs":
            price = 7.95;
            foodEl = $('<p>').text(`Chicken Ceasar $${price}`).addClass('.fs-6 orders');
            $('#order').append(foodEl);
            break;
        default:
            break;
    }
    $('.total-price').remove();
    let orderPrices = $('.orders');
    for ( let i = 0; i < orderPrices.length; i++) {
        let str = orderPrices[i].innerHTML;
        let value = str.slice(-4);
        totalPrice += parseFloat(value);
        // console.log(totalPrice.toFixed(2));
    }
    foodEl = $('<p>').text(`Your order total comes to $${totalPrice.toFixed(2)}`).addClass('h6 total-price');
    $('#total').append(foodEl);
}

$('button').click( function(e) {
    displayOrder(e);
});