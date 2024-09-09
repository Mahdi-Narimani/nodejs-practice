function add(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' && typeof b !== 'number') {
            reject('input must be numbers');
        } else {
            resolve(a + b);
        }
    });
}

function subtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' && typeof b !== 'number') {
            reject('input must be numbers');
        } else {
            resolve(a - b);
        }
    });
}

function multiply(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' && typeof b !== 'number') {
            reject('input must be numbers');
        } else {
            resolve(a * b);
        }
    });
}

function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' && typeof b !== 'number') {
            reject('input must be numbers');
        } else if (b === 0) {
            reject('The second number cannot be zero');
        } else {
            resolve(a / b);
        }
    });
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
};
