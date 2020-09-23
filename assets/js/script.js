/* check off a todo item */
$('li').on('click', function(){
    $(this).toggleClass('checked');
});

/* delete a todo item */
$('span').on('click', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation(); /* stop the event from triggering event listeners on parent elements */
})