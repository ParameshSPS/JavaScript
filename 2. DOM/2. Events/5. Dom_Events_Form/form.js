// Form Events and Prevent Default

const form = document.querySelector('#signup-form');

const creditCard = document.querySelector('#cc')

const termsCheckbox = document.querySelector('#terms')

const vaggieSelect = document.querySelector('#vaggie')


form.addEventListener('submit', function (e) {
    // alert('SUBMITTED THE FORM');
    e.preventDefault();
    // console.log(e);
    console.log('cc', creditCard.value);

    // console.log('terms', termsCheckbox.value); ----> on

    console.log('terms', termsCheckbox.checked);
    // true/false

    console.log('vaggie', vaggieSelect.value);

    // Send form data to database(db)
    // Append something to page using form data

    // e.preventDefault();
});