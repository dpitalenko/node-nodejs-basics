const parseArgs = () => {
    const arr = process.argv.slice(2);
    let result = '';
    for (let i = 0; i < arr.length; i += 1) {
        if (i % 2 === 0) {
            result += arr[i].slice(2) + ' is ';
        } else {
            result += arr[i] + (i === arr.length - 1 ? '' : ', ');
        }
    }
    console.log(result);
};

parseArgs();