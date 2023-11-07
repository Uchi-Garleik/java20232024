/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateSignUp(accountInformation) {
    // const accountType = arrayData[1].split("&")[0]; // ACCOUNT TYPE
    const email = decodeURIComponent(accountInformation[2].split("&")[0]); // EMAIL
    const uname = accountInformation[3].split("&")[0]; // USERNAME
    const pwd = accountInformation[4].split("&")[0]; // PASSWORD
    
    if (!validateEmail(email)) {
        alert("Email must be a valid format: name@service.xx");
        return false;
    }

    if (uname.length < 3) {
        alert("Username must contain at least 3 characters");
        return false;
    }

    if (!(uname.split("").some((unameChar)=>{return unameChar === unameChar.toUpperCase();}))){
        alert("Username must at least contain 1 capital letter")
        return false;
    }
    
    if (!(pwd.split("").some((pwdChar)=>{return pwdChar === pwdChar.toUpperCase();}))){
        alert("Password must contain at least 1 capital letter")
        return false;
    }

    if (pwd.length < 5){
        alert("Password must contain at least 5 characters");
        return false;
    }

    return true;
}

function signup(){
    const formData = $('form.signup').serialize();
    const customData = 'action=USER.SIGNUP';
    const data = formData + '&' + customData;
    console.log(formData);
    console.log(customData);
    console.log(data);
    const arrayData = data.split("=");
    if (validateSignUp(arrayData)) {
        $.ajax({
            url: "/CAFETERIA_EL_GRANO/Controller",
            data: data,
            success: function (dataAjax, textStatus, jqXHR) {
                console.log("sign up successful");
                alert("SIGN UP SUCCESSFUL");
            }
        });
    }
}

function signin(){
    const formData = $('form.signin').serialize();
    const customData = 'action=USER.SIGNIN';
    const data = formData + '&' +customData;
    console.log(data);
    $.ajax({
        url: "/CAFETERIA_EL_GRANO/Controller",
        data: data,
        success: function (dataAjax, textStatus, jqXHR) {
            console.log('signin success');
            if (dataAjax !== "Login correct") {
                alert(dataAjax);
            }
            controlRedirection();
        }
    });
}

function signout(){
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++){
        let cookieName = cookies[i].split("=")[0].trim();
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    document.location.href = "/CAFETERIA_EL_GRANO/index.html";
}

function controlRedirection(){
    let cookies = document.cookie;
    console.log('cookieclicker');
    if (cookies.length > 0){
        // alert("Incorrect login information");
        document.location.href = "/CAFETERIA_EL_GRANO/user-area/user-area.html";
    }else{
    }
}

