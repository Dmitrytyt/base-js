function validate(strNum) {
    strNum = strNum.toString().replace(/-/g, '');
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

console.log(validate('4561-2612-1234-5467'));
