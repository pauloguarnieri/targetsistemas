//5)

function reverseString(string) {
    let splitedString = string.split('');
    let revertedArray = [];

    for (item of splitedString) {
        revertedArray.unshift(item);
    }

    return revertedArray.join('');
};

module.exports = reverseString;