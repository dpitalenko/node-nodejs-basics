import fs from 'fs';

const rename = async () => {
    const oldFilename = 'src/fs/files/wrongFilename.txt';
    const newFilename = 'src/fs/files/properFilename.md';
    const renameFile = () => fs.rename(oldFilename, newFilename, (err) => {
        if(err) throw err;
        console.log('File renamed!');
    });

    fs.access(oldFilename, fs.constants.F_OK, (err) => {
        if (!err) {
            renameFile();
        } else if (err.code === 'ENOENT') {
            fs.access(newFilename, fs.constants.F_OK, (err) => {
                if (!err) throw new Error('FS operation failed');
                console.log('Something get wrong! WrongFilename.txt or properFilename.md must exist!', err)
            });
        }
    });
};

await rename();