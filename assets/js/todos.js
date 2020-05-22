
// Contols page UI
var UIController = (function() {
    var pageLabels = {
        inputField: 'input[type="text"]',
        deleteBtn: 'span.delete',
        item: 'li.item',
        todoList: '#todoList'
    };

    // Utility funciton to generate HTML element
    function getHTML(text) {
        return `<li class="item"> <span class="delete">X</span> ${text}</li>`;
    }

    return {
        labels: pageLabels,
        addElement: function(text) {
            $(pageLabels.todoList).append(getHTML(text));
        }
    }
}());

// Handles and operates on page Events
var EventHandler = (function(UICtrl) {
    function init() {
        // Check off a todo
        $(UICtrl.labels.todoList).on('click',UICtrl.labels.item, function() {
            $(this).toggleClass('strike');
        });

        // Add click event to delete button
        $(UICtrl.labels.todoList).on('click', UICtrl.labels.deleteBtn, function() {
            $(this).parent().fadeOut(350, function() {
                $(this).remove();
            });
        });

        // Add event listener to input field to add item when enter is pressed
        $(UICtrl.labels.inputField).on('keypress', function(e) {
            // Take input on Enter keypress
            if (e.which === 13) {
                var newTodo = $(this).val();
                // Add new Element to DOM
                UICtrl.addElement(newTodo);
                // Clear input field
                $(UICtrl.labels.inputField).val('');
            }
        });
    }

    return {
        setEventHandlers: init
    }

}(UIController));

// Controller Module
var Controller = (function(UICtrl, EventHandle) {
    return {
        init: function() {
            EventHandle.setEventHandlers();
        }
    }
}(UIController, EventHandler));

Controller.init();