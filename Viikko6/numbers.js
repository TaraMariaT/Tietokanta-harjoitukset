const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Anna ensimmäinen luku: ", (num1) => {
    readline.question("Anna toinen luku: ", (num2) => {

        num1 = Number(num1);
        num2 = Number(num2);

        if (num1 > num2) {
            console.log("Suurempi on:", num1);
        } else if (num2 > num1) {
            console.log("Suurempi on:", num2);
        } else {
            console.log("Luvut ovat yhtä suuret.");
        }

        readline.close();
    });
});