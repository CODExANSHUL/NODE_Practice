const hello = 'Hello World';
console.log(hello);
const Cars = ['bmw','volvo','audi'];
console.log(Cars);

// This is Blocking, sychronous way to read and write file
const fs = require('fs'); //fs = file system

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
