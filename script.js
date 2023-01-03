const input = document.querySelector('#input');
const botonEncriptar = document.querySelector('#encriptar');
const botonDesencriptar = document.querySelector('#desencriptar');
const botonCopiar = document.querySelector('#copy');
const resultado = document.querySelector('#resultado');

// Claves de encriptación
const letraA = 'ai';
const letraE = 'enter';
const letraI = 'imes';
const letraO = 'ober';
const letraU = 'ufat';

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
                cifrado = cifrado + letraA;
                break;
            case 'e':
                cifrado = cifrado + letraE;
                break;
            case 'i':
                cifrado = cifrado + letraI;
                break;
            case 'o':
                cifrado = cifrado + letraO;
                break;
            case 'u':
                cifrado = cifrado + letraU;
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
                if (estaCrifrado(letraA, x)) {
                    cifrado = cifrado + 'a';
                    x = x + (letraA.length - 1);
                } else {
                    cifrado = cifrado + texto[x];
                }
                break;
            case 'e':
                if (estaCrifrado(letraE, x)) {
                    cifrado = cifrado + 'e';
                    x = x + (letraE.length - 1);
                } else {
                    cifrado = cifrado + texto[x];
                }
                break;
            case 'i':
                if (estaCrifrado(letraI, x)) {
                    cifrado = cifrado + 'i';
                    x = x + (letraI.length - 1);
                } else {
                    cifrado = cifrado + texto[x];
                }
                break;
            case 'o':
                if (estaCrifrado(letraO, x)) {
                    cifrado = cifrado + 'o';
                    x = x + (letraO.length - 1);
                } else {
                    cifrado = cifrado + texto[x];
                }
                break;
            case 'u':
                if (estaCrifrado(letraU, x)) {
                    cifrado = cifrado + 'u';
                    x = x + (letraU.length - 1);
                } else {
                    cifrado = cifrado + texto[x];
                }
                break;
            default:
                cifrado = cifrado + texto[x];
                break;
        }
    }
    resultado.textContent = cifrado;
    cifrado = "";
}
function estaCrifrado (letraEvaluada, posicion) {
    let palabra = input.value;
    let textoTemporal = [];
    let pos = posicion;

    for (let i=0;i<letraEvaluada.length;i++) {
        textoTemporal = textoTemporal + palabra[pos];
        pos++;
    }
    if (textoTemporal === letraEvaluada) {
        return 1;
    } else {
        return 0;
    }
}