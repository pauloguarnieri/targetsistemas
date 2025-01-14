//4)

function getPercentages(data) {
    const percentages = {};
    const totalValue = Object.values(data).reduce((acumulator, item) => acumulator + item, 0);

    for (const [key, value] of Object.entries(data)) {
        percentages[key] = ((value / totalValue) * 100) + '%';
    }

    return percentages;
};

module.exports = getPercentages;
