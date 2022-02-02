

document.addEventListener("keydown", (ev) => {

    // if(ev.key == " "){
        
    //     //llamar a una función que haga algo....

    // } else if (ev.key == "a"){
    //     console.log("has pulsado la tecla A");
    // }

    console.log(ev);

    switch (ev.key){
        case " ":
            console.log("has pulsado al espacio");
        break;

        case "w":
            console.log("subes arriba");
        break;

        case "a":
            console.log("vas a la izquierda");
        break;

        case "s":
            console.log("bajas abajo");
        break;

        case "d":
            console.log("vas a la derecha");
        break;

        default:
            console.log("no pulses otras cosas pleaseee");
        break;
    }


});

document.write("<h1>Hoy no estoy inspirado.</h1>");

let elementosP = document.getElementsByTagName("p");

console.log(elementosP);

elementosP[2].innerHTML = "Roberto no me perdona";

const cambiaColor = () => {
    let parrafosCambiar = document.getElementsByClassName("parrafosLatin");

    for(let parrafo of parrafosCambiar){
        parrafo.classList.add("parrafosLatinBlue");
    }
}

let rafa = document.getElementById("teriRafa");

rafa.style.color = "yellow";

console.log("me he acabado de cargar");