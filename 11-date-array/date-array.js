const inList = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023', '-test'];

const outList = inList.filter(str => str.length === 10)
                .filter(str => str.indexOf('-', 2) !== -1 || str.indexOf('/', 2) !== -1)
                .filter(str => {
                    let list = str.split('-', 4);
                    list = list.length !== 3 ? str.split('/', 4) : list;

                    if (list.length !== 3) {
                        return false;
                    }

                    let [day, month, year] = list;
            
                    if (day.length !== 2 || month.length !== 2) {
                        return false;
                    }

                    if (Number(year) === NaN) {
                        return false;
                    }

                    day = day.charAt(0) === '0' ? Number(day.charAt(1)) : Number(day);
                    month = month.charAt(0) === '0' ? Number(month.charAt(1)) : Number(month);

                    if (day === NaN || month === NaN || day > 31 || month > 12) {
                        return false;
                    }

                    return true;
                }).map(str => {
                    const item = str.split('/', 3);

                    if (item) {
                        return item.join('-');
                    }

                    return str;
                });

console.log(outList);
