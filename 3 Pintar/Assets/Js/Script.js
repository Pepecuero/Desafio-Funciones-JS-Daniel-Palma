let elemento = document.querySelector('#text');

pintar = function (color = "green") {
    elemento.style.backgroundColor = color;
}

pintar(); 

elemento.addEventListener('click', function () {
    elemento.style.backgroundColor = "yellow";
}
)