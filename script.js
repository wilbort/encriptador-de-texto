const input = document.querySelector('#input');
const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const botonCopiar = document.querySelector('#copy');
const resultado = document.querySelector('#resultado');

// Claves de encriptación
const a = 'ai';
const e = 'enter';
const i = 'imes';
const o = 'ober';
const u = 'ufat';

input.addEventListener('input', detectarInput);
botonEncriptar.addEventListener('click', encriptarTexto);
botonDesencriptar.addEventListener('click', desencriptarTexto);
botonCopiar.addEventListener('click', copiarTexto);

function mostrarResultado () {
    botonCopiar.classList.remove('hidden');
    resultado.classList.remove('hidden');
}
function ocultarTextos () {
    document.querySelector('#resultado-title').classList.add('hidden');
    document.querySelector('#resultado-subtitle').classList.add('hidden');
    document.querySelector('#imagen').style.display = 'none';
    // document.querySelector('.advertencia').classList.add('visible-none');
}
function copiarTexto () {
    navigator.clipboard.writeText(resultado.innerHTML)
}
function activarBotones () {
    botonEncriptar.disabled = false;
    botonEncriptar.style.pointerEvents = 'auto';
    botonDesencriptar.disabled = false;
    botonDesencriptar.style.pointerEvents = 'auto';
    botonCopiar.style.pointerEvents = 'auto';
}
function desactivarBotones () {
    botonEncriptar.disabled = true;
    botonEncriptar.style.pointerEvents = 'none';
    botonDesencriptar.disabled = true;
    botonDesencriptar.style.pointerEvents = 'none';
    botonCopiar.style.pointerEvents = 'auto';
}
function detectarInput () {
    if (input.value) {
        activarBotones();
    } else {
        desactivarBotones();
    }
}
function encriptarTexto () {
    ocultarTextos();
    mostrarResultado();

    let texto = input.value;
    let cifrado = [];

    for (let x=0; x<texto.length; x++) {
        switch (texto[x]) {
            case 'a':
                cifrado = cifrado + a;
                break;
            case 'e':
                cifrado = cifrado + e;
                break;
            case 'i':
                cifrado = cifrado + i;
                break;
            case 'o':
                cifrado = cifrado + o;
                break;
            case 'u':
                cifrado = cifrado + u;
                break;
            default:
                cifrado = cifrado + texto[x];
                break;
        }
    }
    resultado.textContent = cifrado;
}
function desencriptarTexto () {
    ocultarTextos();
    mostrarResultado();

    let texto = input.value;
    let cifrado = [];

    for (let x=0; x<texto.length; x++) {
        switch (texto[x]) {
            case 'a':
                cifrado = cifrado + 'a';
                x = x + (a.length - 1);
                break;
            case 'e':
                cifrado = cifrado + 'e';
                x = x + (e.length - 1);
                break;
            case 'i':
                cifrado = cifrado + 'i';
                x = x + (i.length - 1);
                break;
            case 'o':
                cifrado = cifrado + 'o';
                x = x + (o.length - 1);
                break;
            case 'u':
                cifrado = cifrado + 'u';
                x = x + (u.length - 1);
                break;
            default:
                cifrado = cifrado + texto[x];
                break;
        }
    }
    resultado.textContent = cifrado;
}