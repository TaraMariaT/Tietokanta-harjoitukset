const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Anna sana: ", (word) => {

    let reversed = word.split("").reverse().join("");

    if (word === reversed) {
        console.log("Sana on palindromi.");
    } else {
        console.log("Sana ei ole palindromi.");
    }

    readline.close();
});
