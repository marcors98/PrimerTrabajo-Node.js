const fs = require('fs');

fs.readFile("hola.txt",
(err, data) => {
    if (err) throw err;
    console.log(data.toString());
});

setImmediate(
    () => {
        console.log("Esto se ejecutara mientras se lee el archivo");
    }
);