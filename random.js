console.log("Press ENTER to start.");
const ori_ques = ["fa''ala", "faa'ala", "af'ala", "tafa''ala", "tafaa'ala", "infa'ala", "ifta'ala", "if'alla", "istaf'ala"];

let ques = ori_ques.slice(0);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask () {
  readline.question('', (name) => {
    let i = Math.floor(Math.random() * ques.length);
    let que = ques.splice(i, 1);
    console.clear();
    console.log(`${ques.length + 1}. ${que}`);
    //readline.close();
    if (ques.length) ask();
    else readline.close();
  });
}

ask();
