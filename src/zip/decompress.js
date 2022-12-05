import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const zipFile = 'src/zip/files/archive.gz';
    const file = 'src/zip/files/fileToCompress.txt';
    fs.stat(zipFile, function(err) {
        if(err == null) {
            const unzip = zlib.createUnzip();
            const readStream = fs.createReadStream(zipFile);  
            const writeStream = fs.createWriteStream(file);  
            readStream.pipe(unzip).pipe(writeStream);
            fs.rm(zipFile, (err) => {
                if(err) throw err;
            });
            console.log('File successfully unzipped!');
        } else if(err.code == 'ENOENT') {
            console.log('File has already unzipped!')
        } else {
            console.log('Some other error: ', err.code);
        }
    });
};

await decompress();