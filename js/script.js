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

    content.innerHTML = `
    <div class="d-flex justify-content-center flex-column align-items-center">
        <i class="valid-icon fa-solid fa-circle-check fa-7x"></i>
        <h1 class="text-center mb-3">Your message was successfully submitted !</h1>
    </div>
    <div class="w-100">
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th class="text-center" colspan="5">Resume table</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>${name.value}</td>
                </tr>
                <tr>
                    <td>Company Email</td>
                    <td>${companyEmail.value}</td>
                </tr>
                <tr>
                    <td>Company Size</td>
                    <td>${companySize.textContent}</td>
                </tr>
                <tr>
                    <td>Subject</td>
                    <td>${subject.textContent}</td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td>${message.value}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
    console.log(name.value, companyEmail.value, companySize.textContent, subject.textContent, message.value);
});

