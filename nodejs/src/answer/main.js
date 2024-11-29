const fs = require('fs');
let data;
try {
    data = fs.readFileSync('string.txt', 'utf8'); // читаем содержимое файла
    // console.log(data); // выводим содержимое в консоль
} catch (err) {
    console.error('Ошибка чтения файла:', err);
}

function testPalindromeWithReverse(str) {
    const cleanStr = str.toLowerCase().replace(/[^а-я0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
}

function testPalindromeWithPointers(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }
    return true;
}

// console.log(testPalindromeWithReverse(data));
console.log(testPalindromeWithPointers(data));

