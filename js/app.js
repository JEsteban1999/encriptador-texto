function encriptar() {
    let shift = 3;
    let text = document.querySelector(".programa_entrada_texto").value;
    let result = ''; // Cadena para almacenar el texto cifrado
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        console.log(char);
        if (char.match(/[a-z]/)) { // Verifica si el carácter es una letra minúscula
            let code = text.charCodeAt(i); // Obtiene el valor ASCII del carácter
            // Maneja las letras minúsculas
            char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        result += char; // Añade el carácter cifrado (o sin cambios) al resultado
    }
    let salida = document.querySelector(".programa_salida");
    salida.innerHTML = `
        <div class="contenedor_texto_botoncopiar">
            <p id="resultado_texto">${result}</p>
            <button class="boton_copiar" onclick="copiar()" type="button">Copiar</button>
        </div>
    `;
}

function desencriptar() {
    let shift = 3;
    let text = document.querySelector(".programa_entrada_texto").value;
    let result = ''; // Cadena para almacenar el texto descifrado
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/)) { // Verifica si el carácter es una letra minúscula
            let code = text.charCodeAt(i); // Obtiene el valor ASCII del carácter
            // Maneja las letras minúsculas
            char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        }
        result += char; // Añade el carácter descifrado (o sin cambios) al resultado
    }
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
}

//const shift = 3; // Número de posiciones a desplazar

// // Encriptar
// const encryptedText = encryptCaesarCipher(originalText, shift);
// console.log('Encrypted:', encryptedText); // Heoor, Worog!

// // Desencriptar
// const decryptedText = decryptCaesarCipher(encryptedText, shift);
// console.log('Decrypted:', decryptedText); // Hello, World!