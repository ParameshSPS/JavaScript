// The Squad

let data = [
    {
        name: 'Paramesh',
        age: '23'
    },
    {
        name: 'Hari Krishna',
        age: '26'
    },
    {
        name: 'Naveen',
        age: '26'
    },
    {
        name: 'Gopal',
        age: '23'
    },
    {
        name: 'Bhanu Prakash',
        age: '22'
    },
    {
        name: 'Boooow',
        age: '21'
    }
];

const info = document.querySelector('#info');

let details = data.map(function (item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');