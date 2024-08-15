// function encriptar() {
//     let shift = 3;
//     let text = document.querySelector(".programa_entrada_texto").value;
//     let result = ''; // Cadena para almacenar el texto cifrado
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         if (char.match(/[a-z]/)) { // Verifica si el carácter es una letra minúscula
//             let code = text.charCodeAt(i); // Obtiene el valor ASCII del carácter
//             // Maneja las letras minúsculas
//             char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
//         }
//         result += char; // Añade el carácter cifrado (o sin cambios) al resultado
//     }
//     let salida = document.querySelector(".programa_salida");
//     salida.innerHTML = `
//         <div class="contenedor_texto_botoncopiar">
//             <p id="resultado_texto">${result}</p>
//             <button class="boton_copiar" onclick="copiar()" type="button">Copiar</button>
//         </div>
//     `;
// }

function encriptar() {
    let text = document.querySelector(".programa_entrada_texto").value;
    let result = ''; // Cadena para almacenar el texto cifrado
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match((/[a-z]/))) {
            switch (char) {
                case 'a':
                    char = 'ai';
                    break;
                case 'e':
                    char = 'enter';
                    break;
                case 'i':
                    char = 'imes';
                    break;
                case 'o':
                    char = 'ober';
                    break;
                case 'u':
                    char = 'ufat';
                    break;
                default:
                    break;
            }
            result += char; // Añade el carácter cifrado (o sin cambios) al resultado
        } else {
            alert('Recuerda escribir solo letras en minúscula');
            return;
        }
    }
    let salida = document.querySelector(".programa_salida");
    salida.innerHTML = `
            <div class="contenedor_texto_botoncopiar">
                <p id="resultado_texto">${result}</p>
                <button class="boton_copiar" onclick="copiar()" type="button">Copiar</button>
            </div>
        `;
}

// function desencriptar() {
//     let shift = 3;
//     let text = document.querySelector(".programa_entrada_texto").value;
//     let result = ''; // Cadena para almacenar el texto descifrado
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         if (char.match(/[a-z]/)) { // Verifica si el carácter es una letra minúscula
//             let code = text.charCodeAt(i); // Obtiene el valor ASCII del carácter
//             // Maneja las letras minúsculas
//             char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
//         }
//         result += char; // Añade el carácter descifrado (o sin cambios) al resultado
//     }
//     let salida = document.querySelector(".programa_salida");
//     salida.innerHTML = `
//         <div class="contenedor_texto_botoncopiar">
//             <p id="resultado_texto">${result}</p>
//             <button class="boton_copiar" onclick="copiar()" type="button">Copiar</button>
//         </div>
//     `;
// }

function desencriptar() {
    let text = document.querySelector(".programa_entrada_texto").value;
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (!char.match((/[a-z]/))) {
            alert('Recuerda escribir solo letras en minúscula');
            return;
        }
    }
    let result = text.replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    let salida = document.querySelector(".programa_salida");
    salida.innerHTML = `
        <div class="contenedor_texto_botoncopiar">
            <p id="resultado_texto">${result}</p>
            <button class="boton_copiar" onclick="copiar()" type="button">Copiar</button>
        </div>
    `;
}

function copiar() {
    const textToCopy = document.querySelector("#resultado_texto").innerHTML;
    navigator.clipboard.writeText(textToCopy);
    // Limpiar la entrada de texto
    document.querySelector(".programa_entrada_texto").value = '';
}
