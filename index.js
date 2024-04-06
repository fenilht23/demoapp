const express = require("express");

const app = express();

app.get(
    "/",
    (req, res) => {
        res.json({
            status: 200,
            data: "Data fetched successfully"
        })
    }
)

app.listen(
    3000,
    () => {
        console.log("Server is running on port :- 3000");
    }
)