import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const file = 'src/zip/files/fileToCompress.txt';
    const zipFile = 'src/zip/files/archive.gz';
    fs.stat(file, function(err) {
        if(err == null) {
            const gzip = zlib.createGzip();
            const readStream = fs.createReadStream(file);
            const writeStream = fs.createWriteStream(zipFile);
            readStream.pipe(gzip).pipe(writeStream);
            fs.rm(file, (err) => {
                if(err) throw err;
            });
            console.log('File successfully zipped!');
        } else if(err.code == 'ENOENT') {
            console.log('File has already zipped!')
        } else {
            console.log('Some other error: ', err.code);
        }
    });
};

await compress();