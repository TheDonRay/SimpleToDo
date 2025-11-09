//Function file to get imported into main

const readline = require('readline'); 

const rl = readline.createInterface({ 
    input : process.stdin, 
    output : process.stdout
});  

// initialize empty array as such 
let tasks : string[] = []; // empty array that is instantiated 

//Ask user question 
rl.question('How many Tasks do you have to do today?', (tasks : string) => { 
    console.log(`${tasks}`);
    rl.close(); 
}) 

