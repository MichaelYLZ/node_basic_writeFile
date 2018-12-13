'use strict';

const fs = require('fs');

let student = {  
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};

let data = JSON.stringify(student, null, 2);

fs.writeFile('student-3.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call'); 

/*
writeFile  executes 
in asynchronous manner, 

which means 
our code is not blocked 
while data is written to the file. 

And just like the asynchronous methods from before, 
we need to pass a callback 
to this function.

好处--
This ends up 
saving quite a bit of execution time 
if you have large amounts of data 
to write to your file, 

or if you have quite a few files to write to.

*/