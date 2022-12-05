import {access, constants, rm} from 'node:fs';

const remove = async () => {
    const file = 'src/fs/files/fileToRemove.txt';
    access(file, constants.F_OK, (err) => {
        if(!err) {
            rm(file, (err) => {
                if(err) throw err;
                console.log('File deleted!');
            });
        } else if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    });
};

await remove();