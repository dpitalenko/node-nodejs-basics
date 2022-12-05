const parseEnv = () => {
    const obj = process.env;
    const keys = Object.keys(obj);
    const rss = keys.filter((value) => value.includes('RSS_'));
    let result = '';
    for (let i = 0; i < rss.length; i += 1) {
        const property = rss[i];
        result += property + '=' + obj[property] + (i === rss.length - 1 ? '' : '; ');
    }
    console.log(result)
};

parseEnv();