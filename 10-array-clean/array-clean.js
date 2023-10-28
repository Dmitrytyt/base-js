function max(num, maxNum) {
    return num < maxNum;
}

function filterMax(arr, maxNum, callback) {
    const list = [];

    for (elem of arr) {
        if (callback(elem, maxNum)) {
            list.push(elem);
        }
    }

    return list;
}

console.log(filterMax([1, 2, 45, 4, 7, 9, 3, 4], 6, max));
