import fs from 'fs';

const write = async () => {
    const path = 'src/streams/files/fileToWrite.txt';
    const writeStream = new fs.createWriteStream(path);
    console.log('Hint: in the end enter ctrl + c');
    process.stdin.on('readable', () => {
        let chunk;
        while ((chunk = process.stdin.read()) !== null) {
            writeStream.write(chunk, 'utf-8');
        }
    });
};

await write();