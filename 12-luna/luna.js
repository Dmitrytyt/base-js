function cleaner(str) {
    if (typeof str === 'string' || str instanceof String) {
        return str.toString().replace(/-/g, '');
    }

    return '';
}

function validate(strNum) {
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
