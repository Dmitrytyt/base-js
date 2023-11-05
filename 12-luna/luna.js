function cleaner(str) {
    try {
        if (typeof str === 'string' || str instanceof String) {
            return str.toString().replace(/-/g, '');
        } else {
            throw new SyntaxError('Not a string was passed');
        }
    } catch (e) {
        console.error("String Error: " + e.message);
    }
}

function validate(strNum) {
    if (strNum.length === 0) {
        return false;
    }

    const parity = strNum.length % 2;
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        let digit = Number(strNum[i]);

        if (i % 2 === parity) {
            digit *= 2;

            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
    }

    return Number(sum % 10) === 0;
}

console.log(validate(cleaner('4561-2612-1234-5467')));
console.log(validate(cleaner('fsdf-fsdf-dsaf')));
console.log(validate(cleaner('')));
console.log(validate(cleaner(2)));
