import { Transform } from 'node:stream';

const transform = async () => {
    console.log('Hint: in the end enter ctrl + c');
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString());
            callback();
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();