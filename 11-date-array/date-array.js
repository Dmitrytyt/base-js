const maxLength = 10;
const separates = ['-', '/'];
const lastSeparator = 2;

function isString(val) {
    return typeof val === 'string' || val instanceof String;
}

function stringError() {
    throw new SyntaxError('Not a string was passed');
}

function hasFixedLength(val, length) {
    return val.length === length;
}

function hasLastSeparator(val) {
    for (const item of separates) {
        if (val.indexOf(item, lastSeparator) !== -1) {
            return true;
        }
    }

    return false;
}

function getFixedArray(str, maxLength) {
    for (const item of separates) {
        const list = str.split(item, maxLength + 1);

        if (list.length === maxLength) {
            return list;
        }
    }

    return [];
}

function getNumber(str) {
    return str.charAt(0) === '0' ? Number(str.charAt(1)) : Number(str);
}

function validateRangeNumber(str, maxNum) {
    if (str.length !== 2) {
        return false;
    }

    const num = getNumber(str);

    if (isNaN(num) || num < 1 || num > maxNum) {
        return false;
    }

    return true;
}

function filterItems(val) {
    if (!isString(val)) {
        try {
            stringError();
        } catch (e) {
            console.error("String Error: " + e.message);
            return false;
        }
    }

    if (!hasFixedLength(val, maxLength)) {
        return false;
    }

    if (!hasLastSeparator(val)) {
        return false;
    }

    const list = getFixedArray(val, lastSeparator + 1);

    if (list.length === 0) {
        return false;
    }

    const [day, month, year] = list;

    if (!validateRangeNumber(day, 12) || !validateRangeNumber(month, 31) || isNaN(Number(year))) {
        return false;
    }

    return true;
};

function slashReplace(str) {
    const item = str.split('/', 3);

    if (item.length === 3) {
        return item.join('-');
    }

    return str;
}

const inList = [[], '10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023', '01/00/2022', '-test'];
const outList = inList.filter(filterItems).map(slashReplace);

console.log(outList);
