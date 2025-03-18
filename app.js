// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {

    // Creo una variable input para tomar los datos y luego poder limpiar el campo
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else if (amigos.includes(nombre)) {
        // Verifica si el nombre ya está agregado
        alert("Este amigo ya se encuentra en la lista.");
        return;
    } 
    
    amigos.push(nombre);

    // Crea un nuevo elemento de lista y agregarlo a la lista (ul)
    let li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);
    
    // Limpia el campo de entrada
    input.value = ""; 
}

