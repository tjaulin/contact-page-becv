const content = document.querySelector('.content');
const btnSubmit = document.querySelector('#btnSubmit');

btnSubmit.addEventListener('click', (e) => {
    // HTML Input elements
    const name = document.querySelector('#name');
    const companyEmail = document.querySelector('#email');
    const companySize = document.querySelector('#company-size option:checked');
    const subject = document.querySelector('#subject option:checked');
    const message = document.querySelector('#message');

    e.preventDefault();

    // content.innerHTML = ` `;

    console.log(name.value, companyEmail.value, companySize.textContent, subject.textContent, message.value);
});

