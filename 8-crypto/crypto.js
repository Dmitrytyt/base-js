function crypto(str) {
    return str.split('').reverse().join('');
}

function check(first, second) {
    return first === crypto(second);
}

const hashStr = crypto('password');
console.log(check(hashStr, 'password'));
console.log(check(hashStr, 'wrong'));