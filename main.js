const isFibonacci = require('./utils/fibonacci.js');
const handleVector = require('./utils/vectorReader.js');
const getPercentages = require('./utils/percentage.js');
const reverseString = require('./utils/reverseString.js');
const data = require('./dados.json');

const percentageData = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

console.log(isFibonacci(18));
console.log(isFibonacci(13));
console.log(handleVector(data));
console.log(getPercentages(percentageData));
console.log(reverseString('dracula'));