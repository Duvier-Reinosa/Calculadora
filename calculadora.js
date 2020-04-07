var pantalla = document.getElementById('pantalla');
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var n5 = document.getElementById('n5');
var n6 = document.getElementById('n6');
var n7 = document.getElementById('n7');
var n8 = document.getElementById('n8');
var n9 = document.getElementById('n9');
var n0 = document.getElementById('n0');
var botons = document.getElementById('s');
var botonr = document.getElementById('r');
var botonm = document.getElementById('m');
var botond = document.getElementById('d');
var botoni = document.getElementById('i');
var botonc = document.getElementById('c');



function perro1() {
  pantalla.innerHTML = pantalla.value + parseInt(n1.value);
}
n1.addEventListener("click", perro1);

function perro2() {
  pantalla.innerHTML = pantalla.value + parseInt(n2.value);
}

n2.addEventListener("click", perro2);

function perro3() {
  pantalla.innerHTML = pantalla.value + parseInt(n3.value);
}

n3.addEventListener("click", perro3);

function perro4() {
  pantalla.innerHTML = pantalla.value + parseInt(n4.value);
}

n4.addEventListener("click", perro4);

function perro5() {
  pantalla.innerHTML = pantalla.value + parseInt(n5.value);
}

n5.addEventListener("click", perro5);

function perro6() {
  pantalla.innerHTML = pantalla.value + parseInt(n6.value);
}

n6.addEventListener("click", perro6);

function perro7() {
  pantalla.innerHTML = pantalla.value + parseInt(n7.value);
}

n7.addEventListener("click", perro7);

function perro8() {
  pantalla.innerHTML = pantalla.value + parseInt(n8.value);
}

n8.addEventListener("click", perro8);

function perro9() {
  pantalla.innerHTML = pantalla.value + parseInt(n9.value);
}

n9.addEventListener("click", perro9);

function perro0() {
  pantalla.innerHTML = pantalla.value + parseInt(n0.value);
}

n0.addEventListener("click", perro0);

function suma() {
  pantalla.innerHTML = pantalla.value + " " +(botons.value) + " ";
}

botons.addEventListener("click", suma);

function resta() {
  pantalla.innerHTML = pantalla.value + " " +(botonr.value) + " ";
}
botonr.addEventListener("click", resta);

function multiplicacion() {
  pantalla.innerHTML = pantalla.value + " " +(botonm.value) + " ";
}

botonm.addEventListener("click", multiplicacion);

function division() {
  pantalla.innerHTML = pantalla.value + " " +(botond.value) + " ";
}

botond.addEventListener("click", division);

function borrar() {
  while (pantalla.firstChild) {
    pantalla.removeChild(pantalla.firstChild)
    }
}

botonc.addEventListener("click", borrar);

function resultado() {
  function evaluaArimetica(fun) {
     return new Function('return ' + fun)();
    }
    var resultado = ( evaluaArimetica(pantalla.value) );
      while (pantalla.firstChild) {
        pantalla.removeChild(pantalla.firstChild)
        }

      pantalla.innerHTML = resultado;
}

botoni.addEventListener("click", resultado);
