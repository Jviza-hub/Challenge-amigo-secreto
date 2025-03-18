const inputAmigo = document.getElementById("amigo");
let listaAmigos =[];
const listaAmigosUl = document.getElementById("listaAmigos");
const resultadoUl = document.getElementById("resultado");

function agregarAmigo(){
    //consdicion para que no dejen en blanco
    if (inputAmigo.value == ""){
        alert("Debe ingresar un nombre");
        return;
    }
    //se agrega un nombre
    listaAmigos.push(inputAmigo.value);

    //aqui se esta actualizando el html con los nombres de los amigos ingresados
    listaAmigosUl.innerHTML += `<li>${inputAmigo.value}</li>` 
}


function sortearAmigo(){
    //se busca un numero random para encontrar ala migo secreto
    const sorteo = Math.floor(Math.random() * listaAmigos.length);

    //con el numero encontrado se allo el amigo secreto
    const amigoSecreto =listaAmigos[sorteo];

    //aqui se esta mostrando en el html el nombres del amigos secreto
    resultadoUl.innerHTML = `<li>El amigo secreto es: ${amigoSecreto} </li>`
}