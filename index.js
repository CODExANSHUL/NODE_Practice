// const hello = 'Hello World';
// console.log(hello);
// const Cars = ['bmw','volvo','audi'];
// console.log(Cars);

// This is Blocking, sychronous way to read and write file
const fs = require('fs'); //fs = file system
const http = require('http'); //include server or package.
const url = require('url'); // for routing

/////////////////////////////////////////////////////////////////////////////
//Files
/*
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')  //sync=synchronise //utf-8 is used we are using english
console.log(textIn); //read file

const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!'); //write file

// This is Non-blocking, asynchronous way to read and write file
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
        console.log(data);
});
console.log('Will read file!');

// These are callback Functions....
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
   if (err) return console.log('ERROR!!!!!!'); //if statement if any error

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written!!');
             })
        });
    });
});
console.log('Will read file!');
*/
/*
Syntax of callback function
const.variablName((data, data) => {
commands like console.log
});
*/
////////////////////////////////////////////////

//Server
//This is a callback function
const server = http.createServer((req, res) => { //request and response function in bracket

    const pathName = req.url; //Routing
    if(pathName === '/' || pathName === '/overview') {
        res.end('This is the Overview!');
    } else if (pathName === '/product') {
        res.end('This is Product!');
    } else {
        res.writeHead(404, { //Header
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('Page not Found!!!');
    }
});

server.listen(8000, '127.0.0.1', () => { //8000 = port, 127.0.0.1 = host
    console.log('Listening requests on port 8000');
});

