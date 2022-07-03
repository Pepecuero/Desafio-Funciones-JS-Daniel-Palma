const colorA = "blue", colorS = "red", colorD = "green", sinColor ="Ninguno";
const tarjeta1 = document.querySelector('#tarjeta1');
const tarjeta2 = document.querySelector('#tarjeta2');
const tarjeta3 = document.querySelector('#tarjeta3');
const tarjeta4 = document.querySelector('#tarjeta4');
let colorElegido;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        colorElegido = colorA;
    } else if (event.key === 's' || event.key === 'S') {
        colorElegido = colorS;
    } else if (event.key === 'd' || event.key === 'D') {
        colorElegido = colorD;
    } else 
        colorElegido = sinColor;
    console.log("El color seleccionado es " + colorElegido);
})

cambiaColor = function (cuadro) {
    if (colorElegido === "Ninguno"){
        cuadro.style.backgroundColor = "transparent"; 
    }else
        cuadro.style.backgroundColor = colorElegido;
}

tarjeta1.addEventListener('click', function(){
    cambiaColor(tarjeta1);
})
tarjeta2.addEventListener('click', function(){
    cambiaColor(tarjeta2);
})    
tarjeta3.addEventListener('click', function(){
    cambiaColor(tarjeta3);
})
tarjeta4.addEventListener('click', function(){
    cambiaColor(tarjeta4);
})