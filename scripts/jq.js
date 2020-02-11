

$(document).ready(function () {
    console.log("Starting our jQuery examples!");
    main();
});

function main() {
    console.log('starting main');
    $('h1').css('background-color', 'silver');
    $('h1').addClass('headline-main');
    $('.j-cont').append($("<span>My text</span>").addClass("widget"));
}