import fs from 'fs';

const copy = async () => {
    const newDir = 'src/fs/files_copy';
    const oldDir = 'src/fs/files';
    const copyFolderAndFiles = () => fs.cp(oldDir, newDir, { recursive: true }, (err) => {
        if(err) throw err;
        console.log('Directory created!')
    });

    fs.access(oldDir, fs.constants.F_OK, (err) => {
        if (!err) {
            fs.access(newDir, fs.constants.F_OK, (err) => {
                if (!err) {
                    throw new Error('FS operation failed');
                } else if (err.code === 'ENOENT') {
                    copyFolderAndFiles();
                }
            });
        } else if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    });
};

copy();