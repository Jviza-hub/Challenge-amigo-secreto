const inputAmigo = document.getElementById("amigo");
const listaAmigos =[];
const listaAmigosUl = document.getElementById("listaAmigos");

function agregarAmigo(){
    if (inputAmigo.value == ""){
        alert("Debe ingresar un nombre");
    }
    listaAmigos.push(inputAmigo.value);
    listaAmigosUl.innerHTML += `<li>${inputAmigo.value}</li>` 
}