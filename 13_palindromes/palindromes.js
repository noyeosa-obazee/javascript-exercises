const palindromes = function (word) {
    const original = word.toLowerCase().split('').filter((element) => !/[^\w\s]/.test(element) && element !== ' ');
    const reversed = [...original].reverse();
    return original.join('') === reversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
