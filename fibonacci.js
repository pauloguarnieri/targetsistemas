// 2) Fibonnacci
function isFibonacci(num) {
    if (num === 0 || num === 1) {
        return `${num} pertence a sequência de Fibonacci`;
    }

    let previous = 0;
    let current = 1;

    while (current < num) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    // current === num ? console.log(`${num} pertence a sequência de Fibonacci`) : console.log(`${num} nao pertence a sequência de Fibonacci`);

    if (current === num) {
        return `${num} pertence a sequência de Fibonacci`;
    }
    return `${num} nao pertence a sequência de Fibonacci`;
};


console.log(isFibonacci(18));

//3 

function handleVector(vector) { };