let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let charset = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvxwyz0123456789";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value; 
}

function generatePassword(){
/**
 * função para gerar uma senha aleatoria, pegando da let charset
 */
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
        
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPass(){
    /**
     * função para copiar a senha gerada.
     */
    alert('senha copiada com sucesso')
    navigator.clipboard.writeText(newPassword);
}