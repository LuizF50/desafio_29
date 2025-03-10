const morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
    'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
    'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
    'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
    'z': '--..',
    // Espaço entre palavras será representado por "/"
};

function converterParaMorse(frase) {
    return frase
        .toLowerCase()
        .split(' ')
        .map(palavra =>
            palavra.split('').map(letra => morseCode[letra] || '').join(' ')
        )
        .join(' / ');
}

// Referência aos elementos HTML
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const convertButton = document.getElementById('convertButton');
const resetButton = document.getElementById('resetButton');

// Evento para converter texto em Morse
convertButton.addEventListener('click', () => {
    const input = inputText.value.trim();
    if (input) {
        outputText.textContent = converterParaMorse(input);
    } else {
        outputText.textContent = '';
    }
});

// Evento para reiniciar
resetButton.addEventListener('click', () => {
    inputText.value = '';
    outputText.textContent = '';
});
