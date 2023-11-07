/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.addEventListener("DOMContentLoaded", initComponents());

function initComponents(){
    console.log("initializing components...");
    userInfo();
    contentController();
}

function userInfo(){

    const username = getCookie("username");
    const accountType = getCookie("accounttype");
    const email = getCookie("email");
    const $username = document.querySelector('.username');
    const $accountType = document.querySelector('.account-type');
    const $email = document.querySelector('.email');
    $username.innerHTML = username;
    $accountType.innerHTML = accountType;
    $email.innerHTML = email;
}

function contentController(){
    console.log('...controlling content');
    console.log("acc type:" + getCookie("accounttype"));
    if (getCookie("accounttype") == "worker") {
        document.querySelector('.private').style.display = "flex";
    }else{
        document.querySelector('.private').style.display = "none";
    }
    updateProfilePicture();
    companyHierarchy();
    strikes();
    acuerdos();
}

function acuerdos(){
    const $acuerdosContent = document.querySelector('#acuerdos');
    const $sections = document.querySelector('.grid-item-section')
    const $acuerdosButton = document.querySelector('.acuerdos');
    $acuerdosButton.addEventListener("click",()=>{
        $acuerdosContent.setAttribute("style", "display:flex")
        // $sections.style.display = "none!important";
        $sections.setAttribute("style","display:none")
    });
    backButton($acuerdosContent, $sections);
}

function strikes() {
    const $strikesContent = document.querySelector('#strikes');
    const $sections = document.querySelector('.grid-item-section')
    const $strikesButton = document.querySelector('.strikes');
    $strikesButton.addEventListener("click",()=>{
        $strikesContent.setAttribute("style", "display:flex")
        // $sections.style.display = "none!important";
        $sections.setAttribute("style","display:none")
    });
    backButton($strikesContent, $sections);
}

function companyHierarchy() {
    const $hierarchyContent = document.querySelector('#direccion');
    const $sections = document.querySelector('.grid-item-section')
    const $hierarchyButton = document.querySelector('.hierarchy');
    $hierarchyButton.addEventListener("click",()=>{
        $hierarchyContent.setAttribute("style", "display:flex")
        // $sections.style.display = "none!important";
        $sections.setAttribute("style","display:none")
    });
    backButton($hierarchyContent, $sections);
}

function name(params) {
    
}

function backButton(hideBlock, displayBlock) {

    document.querySelectorAll('.return').forEach((boton)=>{
        boton.addEventListener("click",()=>{
            console.log("hideBlock");
            console.log(hideBlock);
            console.log("displayBlock");
            console.log(displayBlock);
            displayBlock.setAttribute("style", "display:flex");
            hideBlock.setAttribute("style", "display:none");
        })
    });
}

function updateProfilePicture(){
    const $img = document.querySelector('.grid-item-2 img');
    if ( getCookie("accounttype") == "worker" ) {
        $img.src = "/CAFETERIA_EL_GRANO/img/users/worker.png"
    }
    if ( getCookie("accounttype") == "client" ) {
        $img.src = "/CAFETERIA_EL_GRANO/img/users/client.png"
    }
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim().split('=');
        if (cookie[0] === name) {
            console.log(cookie[1]);
            return cookie[1];
        }
    }
    console.log('found nothing');
    return "NULL";
}


