const express = require("express");

const app = express();

app.get(
    "/",
    (req, res) => {
        res.json({
            status: 200,
            data: "Data fetched successfully",
            error: "null"
        })
    }
)

app.get(
    "/byid",
    (req, res) => {
        res.json({
            status: 200,
            data: "Data fetched by id successfully",
            error: "null"
        })
    }
)

app.listen(
    3000,
    () => {
        console.log("Server is running on port :- 3000");
    }
)