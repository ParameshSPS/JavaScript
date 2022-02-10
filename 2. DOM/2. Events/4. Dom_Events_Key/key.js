// Key Events 

// Keypress, Keydown & Keyup

const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
    console.log('keydown!');
});

input.addEventListener('keyup', function (e) {
    console.log('keyup!');
});

input.addEventListener('keypress', function (e) {
    console.log('key press!');
});


// Example

const addItemInput = document.querySelector('#add-item');

const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
    console.log(e);
    if (e.key === 'Enter') {
        if (!this.value) return;
        // add a new item to list
        const newItem = document.createElement('li');
        newItem.innerText = this.value;

        itemsUl.append(newItem);

        this.value = '';
    }
});