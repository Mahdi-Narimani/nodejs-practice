// * Core Modules
const http = require('node:http');
const url = require('node:url');
const fs = require('node:fs');
const https = require('node:https');
// ****************************************************************

// * 1. Creating Simple API with http and routing with url modules

/* 
* Successful completion of exercise 1

const data = fs.readFileSync('./data/data.json', 'utf8');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the home page');
    } else if (pathname == '/api/data') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(data);
    } else if (pathname === '/api/other') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(JSON.stringify({ massage: 'Other endpoint' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server Running on http://127.0.0.1:3000');
});

*/

// ! 1. The End practice 1

// ****************************************************************

// * 2. Creating Module and using from Promises

/* 
* Successful completion of exercise 2

const { add, subtract, multiply, divide } = require('./modules/mathOperations');

add(4, 6)
    .then((val) => console.log(val))
    .catch((err) => console.error(err));

subtract(8, 2)
    .then((val) => console.log(val))
    .catch((err) => console.error(err));

multiply(3, 6)
    .then((val) => console.log(val))
    .catch((err) => console.error(err));

divide(2, 7)
    .then((val) => console.log(val))
    .catch((err) => console.error(err));
*/

// ! 2. The End practice 2

// ****************************************************************

// * 3. Working with Callback and file management

/*
* Successful completion of exercise 3

* Version 1
fs.readFile('./text-files/input.txt', 'utf8', (err, data) => {
    console.error(err);
    const reverseText = data.split('').reverse().join('');
    fs.writeFile('./text-files/output.txt', reverseText, (err) => {
        console.error(err);
    });
});

* ****************************************************************

* Version 2
function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const reverseText = data.split('').reverse().join('');
                resolve(reverseText);
            }
        });
    });
}

function writeFilePromise(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(
                    `The text was successfully written to the ${path} file`
                );
            }
        });
    });
}

async function mngFile() {
    const responseReadFile = await readFilePromise('./text-files/input.txt');
    const responseWriteFile = await writeFilePromise(
        './text-files/output.txt',
        responseReadFile
    );

    console.log('Result Operation: ' + responseWriteFile);
}

mngFile();
*/

// ! 3. The End practice 3

// ****************************************************************

// * 4. Working with Promises and Async/Await

/*
* Successful completion of exercise 2

async function createFiles() {
    try {
        await fs.promises.writeFile(
            './text-files/file1.txt',
            'This is file 1 content'
        );

        await fs.promises.writeFile(
            './text-files/file2.txt',
            'This is file 2 content'
        );

        await fs.promises.writeFile(
            './text-files/file3.txt',
            'This is file 3 content'
        );
    } catch (error) {
        console.error(error);
    }
}

function readFiles(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function init() {
    try {
        createFiles();

        const file1 = await readFiles('./text-files/file1.txt');
        const file2 = await readFiles('./text-files/file2.txt');
        const file3 = await readFiles('./text-files/file3.txt');

        const allPromise = await Promise.all([file1, file2, file3]);

        console.log(allPromise.join('\n'));
    } catch (error) {
        console.error(error);
    }
}

init();

*/

// ! 4. The End practice 4

// ****************************************************************

// * 5. Using Streams to read and write files

/*

* Successful completion of exercise 2

const readableStream = fs.createReadStream('./text-files/bigfile.txt');
const writableStream = fs.createWriteStream('./text-files/copy_bigfile.txt');

readableStream.on('data', (chunk) => {
    writableStream.write(chunk.toString());
    writableStream.on('finish', () => {
        console.log('All data has been written');
    });
});
readableStream.on('end', () => {
    console.log('no more data to read');
    writableStream.end('this is the end of the stream');
});

readableStream.on('error', (err) => {
    console.error(`An error occurred: ${err}`);
});
*/

// ! 5. The End practice 5

// ****************************************************************

// * 6. Handle asynchronous requests with callbacks and promises Task
/*

* Successful completion of exercise 2

function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        https
            .get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

* get data with promise method
getDataWithPromise()
    .then((data) => {
        console.log('Data with promise:', data);
    })
    .catch((err) => {
        console.error('Error:', err.message);
    });

* get data with async/await method
async function getDataWithAsyncAwait() {
    try {
        const data = await getDataWithPromise();
        console.log('Data with async/await:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getDataWithAsyncAwait();

*/

// ! 6. The End practice 6
