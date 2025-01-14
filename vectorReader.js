const dados = require('./dados.json');

function handleVector(vector) {
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

    average = values.reduce((sum, value) => sum + value, 0) / values.length;

    values.forEach(item => {
        if (item > average) {
            count++;
        }

    });

    console.log(`Menor valor: ${lowestValue}, Maior Valor: ${highestValue}`);
    console.log(values.length);
    console.log('media:', average);
    console.log(`Numero de dias que o lucro foi acima da media: ${count}`);
};

handleVector(dados);