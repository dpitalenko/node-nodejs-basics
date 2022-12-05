import {readdir} from 'node:fs';

const list = async () => {
    const folder = 'src/fs/files';
    readdir(folder, (err, items) => {
        if (err) throw new Error('FS operation failed');
        items.forEach((value) => console.log(value));
    });
};

await list();