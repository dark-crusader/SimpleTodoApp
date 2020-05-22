// Check off a todo
$('li').on('click', function() {
    $(this).toggleClass('strike');
});

// Add click event to delete button
$('span.delete').on('click', function() {
    $(this).parent().remove();
});