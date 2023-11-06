const btnSelector = '[data-action]';
const idResult = 'result';

function isString(val) {
    return typeof val === 'string' || val instanceof String;
}

function getInputVal(idElem) {
    const input = document.querySelector(`input#${idElem}`);

    if (!input) {
        return false;
    }

    if (!isString(input.value) || input.value.length === 0) {
        return false;
    }

    const inputNum = Number(input.value);

    if (isNaN(inputNum)) {
        return;
    }

    return inputNum;
}

function insert(val, prefix = '') {
    const putElem = document.getElementById(idResult);

    if (putElem) {
        putElem.innerHTML = `${prefix}${val}`;
    }
}

function showResult(val) {
    if (!isNaN(val)) {
        insert(val, 'Result: ');
    }
}

function clearResult(e) {
    insert('');
}

function action(e) {
    const operation = e.target.dataset.action;

    if (!operation) {
        return;
    }

    const firstVal = getInputVal('first');
    const secondVal = getInputVal('second');

    if (!firstVal || !secondVal) {
        return;
    }

    let result = ''; 

    switch(true) {
        case operation === '+':
            result = firstVal + secondVal;
            break;
        case operation === '-':
            result = firstVal - secondVal;
            break;
        case operation === '/':
            result = firstVal / secondVal;
            break;
        case operation === '*':
            result = firstVal * secondVal;
            break;
    }

    showResult(Number(result));
}

function setListeners() {
    document.addEventListener('click', action);

    const inputs = document.querySelectorAll('.form input');

    if (inputs.length) {
        for (const input of inputs) {
            input.addEventListener('focus', clearResult);
        }
    }
}

(function render() {
    const btn = document.querySelector(btnSelector);

    if (btn) {
        setListeners();
    }
})();