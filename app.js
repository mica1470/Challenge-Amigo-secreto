// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {

    // Creo una variable input para tomar los datos y luego poder limpiar el campo
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else if (amigos.includes(nombre)) {
        // Verifica si el nombre ya está agregado
        alert("Este amigo ya se encuentra en la lista.");
        input.value = ""; 
        return;
    } 
    
    amigos.push(nombre);

    // Limpia el campo de entrada
    input.value = ""; 
     // Actualizar la lista en el HTML
    actualizarListaAmigos();
}

function actualizarListaAmigos()
{
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo()
{
    // Verifica si hay al menos un amigo para sortear
    if (amigos.length === 0)  {
        alert("Por favor, inserte al menos un nombre antes de sortear.");
        return;
    }
    // Genera un número aleatorio entre 0 y la longitud de los amigos
    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[randomIndex];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;


}