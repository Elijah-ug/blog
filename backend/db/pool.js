import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const envVariables = ["PG_USER", "PG_HOST", "PG_DATABASE", "PG_PORT", "PG_PASSWORD"];
envVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
        console.log("Database variables didn't match");
    }
})

const db = Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD,
});
db.connect()
    .then(() => console.log("Connected Successfully"))
    .catch((error) => {
        console.log("Failed to connect to db: ", error);
        process.exit(1);
    });
// listen to any errors from the db
app.on("error", (error) => {
    console.log("Database Error: ", error.message);
    process.exit(1);
});
// query function
export const query = (values, variables) => db.query(values, variables);
