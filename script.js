const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;

}

function btncopiar() {
    const textArea = document.getElementById('textToCopy');

    // Verifica se o elemento foi encontrado
    if (textArea) {
        textArea.select();
        textArea.setSelectionRange(0, 99999); 

        navigator.clipboard.writeText(textArea.value)
            .catch(err => {
                console.error('Erro ao copiar o texto:', err);
            });
    } else {
        console.error('Elemento textarea não encontrado');
    }
}
/* função mudar de imagem*/
document.getElementById('btnCriptografar').addEventListener('click', function() {
    const mensagemElement = document.querySelector('.mensagem');
    mensagemElement.style.backgroundImage = "none";

});

document.getElementById("Textarea").addEventListener("input", function(event) {
    let texto = event.target.value;
    // Regex para permitir apenas letras minúsculas (sem acentuação) e números
    let textoFiltrado = texto.replace(/[^a-z0-9 ]/g, '');
    if (texto !== textoFiltrado) {
        event.target.value = textoFiltrado;
    }
});



    