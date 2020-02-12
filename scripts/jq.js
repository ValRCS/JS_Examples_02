let myGlobal = 0;



$(document).ready(function () {
    console.log("Starting our jQuery examples!");
    main();
});

function main() {
    console.log('starting main');
    $('h1').css('background-color', 'silver');
    $('h1').addClass('headline-main');
    $('.j-cont').append($("<span>My text</span>").addClass("widget"));
    $('.j-cont').append($("<button>Press Me</button>").addClass("btn-primary"));
    $('.j-cont').append($("<button>Press Me Too</button>").addClass("btn-secondary"));

    $('.btn-primary').prop("disabled", true);
    $('.btn-primary').prop("name", "button-name");
    $('.btn-primary').remove();
    document.querySelectorAll('.btn-secondary').forEach((el) => { el.setAttribute("disabled", true) }

    );
    document.querySelectorAll('.btn-secondary').forEach((el) => {
        el.parentNode.removeChild(el);
    });

    $('#clone-me')
        .clone()
        .prop('id', 'clone2')
        .addClass('cool-class')
        .text('New Text')
        .appendTo('.new-parent');
}