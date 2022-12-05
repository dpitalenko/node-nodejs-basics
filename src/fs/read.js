import {readFile} from 'node:fs';

const read = async () => {
    const file = 'src/fs/files/fileToRead.txt';

    readFile(file, 'utf-8', (err, data) => {
        if(err) throw new Error('FS operation failed');
        console.log(data);
    });
};

await read();