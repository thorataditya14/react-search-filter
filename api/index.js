import express from "express";
import cors from "cors";
import { Users } from "./users.js";


const app = express();

app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
    const { q } = req.query;

    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        );
    };

    q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});