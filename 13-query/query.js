const query = {
    search: 'Вася',
    take: 10,
};

function getQuery(query) {
    const list = [];

    for (let key in query) {
        const param = query?.[key] ? `${key}=${query[key]}` : '';

        if (param) {
            list.push(param);
        }
    }

    return list.length ? list.join('&') : '';
}

console.log(getQuery(query));