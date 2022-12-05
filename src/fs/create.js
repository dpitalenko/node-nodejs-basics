import {access, appendFile, constants} from 'fs';

const create = async () => {
    const file = 'src/fs/files/fresh.txt';
    const text = 'I am fresh and young';
    access(file, constants.F_OK, function(err) {
        if(!err) {
            throw new Error('FS operation failed');
        } else if (err.code === 'ENOENT') {
            appendFile(file, text, function(err) {
                if(err) throw err;
                console.log('File created!')
            }); 
        }
    });
};

await create();