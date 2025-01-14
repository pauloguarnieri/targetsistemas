const dados = require('../dados.json');

//3)
function handleVector(vector) {
    let monthTime = 30;
    let lowestValue = 'empty';
    let highestValue = 'empty';
    let values = [];
    let count = 0;
    let average = 0;

    vector.forEach(item => {
        if (item["valor"] > 0) {
            values.push(item["valor"]);
            if (lowestValue === 'empty' || item["valor"] < lowestValue) {
                lowestValue = item["valor"];
            }
            if (highestValue === 'empty' || item["valor"] > highestValue) {
                highestValue = item["valor"];
            }
        }
    });

    average = values.reduce((sum, value) => sum + value, 0) / monthTime;

    values.forEach(item => {
        if (item > average) {
            count++;
        }

    });

    return `O menor valor de faturamento foi: ${lowestValue}\nO maior Valor de faturamento: ${highestValue}\nNumero de dias que o lucro foi acima da media do mês: ${count}`;
};

module.exports = handleVector;