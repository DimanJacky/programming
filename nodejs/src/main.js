const fs = require('fs');
let data;
try {
    data = fs.readFileSync('string.txt', 'utf8'); // читаем содержимое файла
    // console.log(data); // выводим содержимое в консоль
} catch (err) {
    console.error('Ошибка чтения файла:', err);
}

// В data попадает строка из файла string.txt
// Нужно написать функцию является ли строка палиндромом, т.е. со всех сторон одинаковая
// Можно написать простую функцию и оптимизированную
// Нужно учитывать что могут быть пробелы, специальные символы и большие и маленькие буквы

// это просто функция со строкой
function testPalindromeWithReverse(str) {
    // удаляем все символы, которые не буквы и не строки и приводим строку в нижний регистр
    const cleanStr = str.toLowerCase().replace(/[^а-я0-9]/g, '');

    return cleanStr === cleanStr.split('').reverse().join('');
}

function isEquals(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

function testPalindromeWithPointers(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        const firstChar = str[start];
        const endChar = str[end];

        if (!isLetter(firstChar)) {
            start += 1;
            continue;
        }

        if (!isLetter(endChar)) {
            end -= 1;
            continue;
        }

        if (!isEquals(firstChar, endChar)) {
            return false;
        }

        start++;
        end--;
    }
    return true;
}

console.log(testPalindromeWithReverse(data));
// console.log(testPalindromeWithPointers(data));

