
const passwordConfirmation = () => {

    let form = document.querySelector("form");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");
    let createAccountButton = document.querySelector("#create-account");

    if (form.requestSubmit) {

        createAccountButton.addEventListener("click", () => {

            if (confirmPassword.value == password.value) {
                form.submit;
                confirmPassword.setCustomValidity("");

            } else {
                confirmPassword.setCustomValidity("Passwords must match!");
            }

        });


    }

}

passwordConfirmation();





