import crypto from 'crypto';
import {readFile} from 'node:fs';

const calculateHash = async () => {
    const file = 'src/hash/files/fileToCalculateHashFor.txt';
    const getTextHash = (data) => crypto.createHash("SHA256").update(data).digest("hex");

    readFile(file, 'utf-8', (err, data) => {
        if (err) throw err;
        const hash = getTextHash(data)
        console.log(hash);
    });
};

await calculateHash();