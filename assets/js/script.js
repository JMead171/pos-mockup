let displayOrder = (e) => {
    if (e.target.id === "cb") {
        let price = 7.00;
        let foodEl = $('<p>').text(`Cheese Burger $ ${price}`).addClass('.fs-6');
        $('#order').append(foodEl);
    };
}

$('button').click( function(e) {
    displayOrder(e);
});