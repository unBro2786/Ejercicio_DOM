// const PI = 3.1415962;
// const MAX_VALUE = 50;

//El objeto "document" es el primer objeto de nuestro documento y el que engloba todo el documento
//El metodo "getElementById" muestra en la consola del navegador el Elemento seleccionado referente a su ID

//console.log(document.getElementById("encabezado1"));

let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");

// The complete document is searched, including the root node.The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call document.getElementsByTagName() again.
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

// Permite hacer una consulta con un selector css
let otroElemento = document.querySelector("ul>li"); //El primero que encuentra

let otrosElementos = document.querySelectorAll("ul>li"); //Todos los que encuentre

let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");

console.log("otroElmento: ", otroElemento);

console.log("otrosElementos: ", otrosElementos);

console.log(listas.length);//2
// console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.length);//10
console.log(elementos.item(2));


//El innerText es una propiedad de lectura y escritura, se puede leer o modificar solo el texto entre comillas
encabezado1.innerText = "Ejercicio DOM";
encabezado2.innerText = "DOM Exercise";
console.log(encabezado1.innerText, encabezado2.innerText);

// La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
// No usar innerHTML para estar asignando uno por uno los valores, mejor tener todos los elementos juntos y agregarlos una sola vez, no usar seguido "+="
encabezado1.innerHTML = "<em>Ejercicio</em> DOM";

//Evento de escuchar de tipo click
// Puede tener una funcion creada, anonima o tipo flecha
// https://developer.mozilla.org/es/docs/Web/Events

// function handleEvent(event){
//     event.preventDefault();//no hagas lo que haces por defecto
//     console.log("boton btnModificar presionado");
// }

// btnMostrar.addEventListener("click", handleEvent);


btnMostrar.addEventListener("click", eventoClickBoton);
function eventoClickBoton(event){
    event.preventDefault();//no hagas lo que haces por defecto
    
    let element = document.createElement("li")
    element.innerText = "Another Item";
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);
    let element3 = element.cloneNode(true);
    let element4 = element.cloneNode(true);

    // listas.item(0).before(element);
    // listas.item(0).prepend(element2);
    // listas.item(0).append(element3);
    // listas.item(0).after(element4);

    // listas.item(1).insertAdjacentElement("afterbegin", element);
    // listas.item(1).insertAdjacentElement("beforeend", element2);
    
    listas.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before begin</li>`);
    listas.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After End</li>`);
    listas.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item">After begin</li>`);
    listas.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item">Before end</li>`);
}

/* Se ejecuta cuando termine de cargar la pagina */
window.addEventListener("load", function(event){
    console.log("Se terminó de cargar la pagina");
});

/* Funcion para convertir el value a mayusculas */
function textToUpper(event) {
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}

/* blur es un evento cuando se sale del campo */
txtRFC.addEventListener("blur", textToUpper);
/* blur es un evento cuando se sale del campo */
txtCURP.addEventListener("blur", textToUpper);

txtTelefono.addEventListener("blur", function (event) {
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
});