/* check off a todo item */
$('ul').on('click', 'li', function(){
    $(this).toggleClass('checked');
});

/* delete a todo item */
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation(); /* stop the event from triggering event listeners on parent elements */
});

/* add a new todo item */
$('input[type="text"]').on('keypress', function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val('');
        $('ul').append('<li class="text"><span><i class="fa fa-trash"></i></span>' +  todoText + '</li>');
    }   
});

/* toggle input form */
$('.fa-plus').on('click', function() {
    $('input[type="text"]').fadeToggle();
});