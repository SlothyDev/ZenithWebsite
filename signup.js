function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error")
    messageElement.classList.add(`form__message--${type}`)
}

function setInputError(inputElement,message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        //Perform LogIn
        setFormMessage(loginForm,"error","Invalid username/password combination.")
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id ==="signupUsername" && e.target.value.length > 0 && e.target.value.length < 4){
                setInputError(inputElement, "Username must be at least 4 characters long.")
            }
            if(e.target.id ==="signupEmail" && e.target.value.length > 0 && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value) == false){
                setInputError(inputElement, "This is an invalid email address.")
            }
            if(e.target.id === "signupPassword" && e.target.value.length > 0 && /[A-Z]/.test(e.target.value) == false && /[a-z]/.test(e.target.value) == false && /[0-9]/.test(e.target.value) == false){
                setInputError(inputElement, "Password must contain atleast 1 Uppercase, Lowercase, and Number.")
            }
            if(e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 6){
                setInputError(inputElement, "Password must be atleast 6 characters long.")
            }
            if(e.target.id === "signupConfirm" && e.target.value.length > 0 && e.target.value != e.target.parentElement.parentElement.querySelector("#confirmPass").querySelector("#signupPassword").value){
                console.log(e.target.parentElement.parentElement.querySelector("#confirmPass").querySelector("#signupPassword").value)
                setInputError(inputElement, "Does not match password.")
            }
            
            inputElement.addEventListener("input", e =>{
                clearInputError(inputElement);
            });
            
        });
    });

});