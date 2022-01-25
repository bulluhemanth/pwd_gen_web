/* para añadir reglas CSS  de manera dinámica*/
var s = document.createElement("style");
document.head.appendChild(s);

var inputDiv = document.querySelector("#inputDiv");
var w = parseInt(
  window.getComputedStyle(inputDiv, null).getPropertyValue("width")
);
/* EL INPUT */
var elInput = document.querySelector("input[type='range']");
elInput.style.width = w + "px";
var inputMin = elInput.getAttribute("min");
var inputMax = elInput.getAttribute("max");
var k = w / (inputMax - inputMin);

/* LA ETIQUETA */
var etiqueta = document.querySelector("#etiqueta");
var ew = parseInt(
  window.getComputedStyle(etiqueta, null).getPropertyValue("width")
);

/* el valor de la etiqueta (el tooltip) */
etiqueta.innerHTML = elInput.value;
/* calcula la posición inicial de la etiqueta (el tooltip) */
etiqueta.style.left = elInput.value * k - ew / 2 + "px";
/* establece el estilo inicial del TRACK */
s.textContent =
  "input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, HotPink " +
  elInput.value +
  "%,black " +
  elInput.value +
  "%)}";
s.textContent +=
  "input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, HotPink " +
  elInput.value +
  "%,black " +
  elInput.value +
  "%)}";

elInput.addEventListener(
  "input",
  function () {
    /* cambia el valor de la etiqueta (el tooltip) */
    etiqueta.innerHTML = elInput.value;
    /* cambia la posición de la etiqueta (el tooltip) */
    etiqueta.style.left = elInput.value * k - ew / 2 + "px";
    /* cambia el estilo del TRACK */
    s.textContent =
      "input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, HotPink " +
      elInput.value +
      "%,black " +
      elInput.value +
      "%)}";
    s.textContent +=
      "input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, HotPink " +
      elInput.value +
      "%,black " +
      elInput.value +
      "%)}";
  },
  false
);
