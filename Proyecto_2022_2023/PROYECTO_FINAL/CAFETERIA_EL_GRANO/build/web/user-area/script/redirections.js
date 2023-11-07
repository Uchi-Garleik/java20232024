/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener("DOMContentLoaded", initComponents);

function initComponents(params) {
    document.querySelector('.convenio').addEventListener('click',returnConvenio);
    document.querySelector('.prevencion').addEventListener("click",returnPRL);
}

function returnConvenio(params) {
    window.open('https://www.ccoo-servicios.es/archivos/hosteleria-zaragoza-2022.pdf', '_blank');
}

function returnHome(params){
    window.open("../index.html");
}

function returnPRL(){
    window.open("../img/FOL/tablaPRL.pdf", '_blank');
}
