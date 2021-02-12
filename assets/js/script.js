let displayOrder = (e) => {
    let foodEl = "";
    let price = 0;
    switch (e.target.id) {
        case "cb":
            price = 8.00;
            foodEl = $('<p>').text(`Cheese Burger $ ${price}`).addClass('.fs-6');
            $('#order').append(foodEl);
            break;
        case "cs":
            price = 7.00;
            foodEl = $('<p>').text(`Chicken Ceasar $ ${price}`).addClass('.fs-6');
            $('#order').append(foodEl);
            break;
        default:
            break;
    }
}

$('button').click( function(e) {
    displayOrder(e);
});