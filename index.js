const steppersSection = document.getElementById('registration-steppers-container');
const showMoreBtn = document.getElementById('show-more-btn');
const showLessBtn = document.getElementById('show-less-btn');

showMoreBtn.addEventListener('click', event => {
    console.log('showMoreBtn', event)
    steppersSection.classList.add('show-more')
    steppersSection.classList.remove('show-less')
})

showLessBtn.addEventListener('click', event => {
    console.log('showLessBtn', event)
    steppersSection.classList.add('show-less')
    steppersSection.classList.remove('show-more')
})


// FORM
const formBtn = document.getElementById('next-btn');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const promoCode = document.getElementById('promo-code');
const promoCodeValidator = document.getElementById('promo-code-validator');

firstName.addEventListener('focusout', event => {
    checkIfFormIsValid(firstName)
})

lastName.addEventListener('focusout', event => {
    checkIfFormIsValid(lastName)
})

email.addEventListener('focusout', event => {
    checkIfFormIsValid(email)
})

phone.addEventListener('focusout', event => {
    checkIfFormIsValid(phone)
})

promoCode.addEventListener('focusout', event => {
    checkIfFormIsValid(promoCode)
    if (promoCode.value <= 3) {
        promoCodeValidator.classList.remove('promo-code-valid')
    } else {
        promoCodeValidator.classList.add('promo-code-valid')
    }
})

const checkIfFormIsValid = (input) => {
    if (input.value.length <= 3) {
        formBtn.classList.add('disabled-button')
    } else {
        formBtn.classList.remove('disabled-button')
    }
    console.log('formBtn', )
}
