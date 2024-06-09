// JavaScript code to manage grocery list
document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const groceryList = document.getElementById('groceryList');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form input values
        const item = document.getElementById('item').value;
        const category = document.getElementById('category').value;

        // Create new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" id="${item}" value="${item}">
            <label for="${item}">${item} - ${category}</label>
        `;

        // Add list item to grocery list
        groceryList.appendChild(listItem);

        // Reset form
        addItemForm.reset();
    });
});
