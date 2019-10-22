const express = require('express');
const path = require('path');
const fs = require("fs");
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, function() {
  console.log('listening on port 3000');
});

app.put("/telemetry", (req, res) => {
    // READ DATA FILE
    fs.readFile('./server/data.txt', 'utf8', function (err, contents) {
        // IF THE FILE ISNT FOUND, CREATE ONE
        if (err !== null && err.code === "ENOENT") {
            var data = {};
            var keys = Object.keys(req.body);
            for (var i = 0; i < keys.length; i++) {
                data[keys[i]] = {};
                data[keys[i]][req.body[keys[i]]] = 1;
            }
            // CREATE THE FILE
            fs.writeFile("./server/data.txt", JSON.stringify(data), (err) => {
                if (err)
                    console.error(err);
                res.status(200).send();
            });
        }
        // IF SOME OTHER ERROR, THROW ERROR
        else if (err) {
            res.status(400).send();
        }
        // IF FILE EXISTS UPDATE FILE
        else {
            var data = JSON.parse(contents);
            var keys = Object.keys(req.body);
            for (var i = 0; i < keys.length; i++) {
                if (!data.hasOwnProperty(keys[i])) {
                    data[keys[i]] = {};
                    data[keys[i]][req.body[keys[i]]] = 1;
                }
                else if (data.hasOwnProperty(keys[i])) {
                    if (!data[keys[i]].hasOwnProperty(req.body[keys[i]])) {
                        data[keys[i]][req.body[keys[i]]] = 1;
                    }
                    else {
                        data[keys[i]][req.body[keys[i]]] += 1;
                    }
                }
            }
            fs.writeFile("./server/data.txt", JSON.stringify(data), err => {
                if (err) {
                    console.error(err);
                }
                res.status(200).send();
            });
        }
    });
});
