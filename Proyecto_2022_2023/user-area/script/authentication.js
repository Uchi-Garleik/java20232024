/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function signup(){
    const formData = $('form.signup').serialize();
    const customData = 'action=USER.SIGNUP';
    const data = formData + '&' + customData;
    console.log(formData);
    console.log(customData);
    console.log(data);
    $.ajax({
        url: "/CAFETERIA_EL_GRANO/Controller",
        data: data,
        success: function (data, textStatus, jqXHR) {
            console.log('signup success');
        }
    });
}

function signin(){
    const formData = $('form.signin').serialize();
    const customData = 'action=USER.SIGNIN';
    const data = formData + '&' +customData;
    console.log(data);
    $.ajax({
        url: "/CAFETERIA_EL_GRANO/Controller",
        data: data,
        success: function (data, textStatus, jqXHR) {
            console.log('signin success');
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
    if (!cookies.length > 0){
        alert("Incorrect login information");
    }else{
        document.location.href = "/CAFETERIA_EL_GRANO/user-area/user-area.html";
    }
}

