document.body.addEventListener('onload', init());
function init() {
    document.querySelector('#signin-button').addEventListener("click", popSignInForm);
    document.querySelector('#signup-button').addEventListener("click", popSignUpForm);
    virtualInsanity();
}

function popSignInForm(params){
    const signInForm = document.querySelector('.form-container.signin');
    const signUpForm = document.querySelector('.form-container.signup');

    const signInOption = document.querySelector('#signin-button');
    const signUpOption = document.querySelector('#signup-button');

    signInOption.style.backgroundColor = 'var(--form-field-selected-background)';
    signUpOption.style.backgroundColor = 'var(--form-field-unselected-background)';

    signInForm.style.display = "flex";
    signUpForm.style.display = "none";
}

function popSignUpForm(params){
    const signInForm = document.querySelector('.form-container.signin');
    const signUpForm = document.querySelector('.form-container.signup');

    const signInOption = document.querySelector('#signin-button');
    const signUpOption = document.querySelector('#signup-button');

    signInOption.style.backgroundColor = 'var(--form-field-unselected-background)';
    signUpOption.style.backgroundColor = 'var(--form-field-selected-background)';

    signInForm.style.display = "none";
    signUpForm.style.display = "flex";
}

function popSignForm(params) {
    const $signForm = document.querySelector('#sign-container');
    if ($signForm.style.display != "none") {
        console.log($signForm.style.display);
        $signForm.style.display = "none";
    }else{
        console.log($signForm.style.display);
        $signForm.style.display = 'flex';
    }
}


function virtualInsanity(){
    const signButton = document.querySelector('#pop-sign-form-button');
    if (getCookie("username") != "NULL") {
        signButton.addEventListener("click",()=>{
            document.location.href = "/CAFETERIA_EL_GRANO/user-area/user-area.html";
        });
    }else{
        signButton.addEventListener("click", popSignForm);
    }
}