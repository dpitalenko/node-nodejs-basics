import fs from 'fs';

const read = async () => {
    const path = 'src/streams/files/fileToRead.txt'
    const readStream = new fs.ReadStream(path, {encoding: 'utf-8'});
    readStream.on('readable', function() {
        const data = readStream.read();
        if (data !== null) process.stdout.write(data);
    });
};

await read();