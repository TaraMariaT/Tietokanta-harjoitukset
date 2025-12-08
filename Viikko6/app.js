const express = require("express");
const app = express();

// mahdollistaa POST-body:n lukemisen
app.use(express.json());


app.use((req, res, next) => {
    console.log("Yleinen middleware kutsuttiin");
    next();
});

app.use("/example", (req, res, next) => {
    console.log("Example-middleware kutsuttiin");
    next();
});


// 1. GET-metodi
app.get("/", (req, res) => {
    res.send("Tämä on GET-metodi");
});

// 2. GET-metodi yhdellä parametrilla
app.get("/example/:name", (req, res) => {
    res.send("Hei " + req.params.name);
});

// 3. GET kahdella parametrilla
app.get("/example2/:firstName/:lastName", (req, res) => {
    res.send(`Hei ${req.params.firstName} ${req.params.lastName}`);
});

// 4. POST-metodi
app.post("/data", (req, res) => {
    console.log("POST-body:", req.body);
    res.send(req.body); // palautetaan sama data
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Palvelin käynnissä portissa ${PORT}`);
});
