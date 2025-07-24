import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import blogRoutes from "./routes/posts.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


const corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev")); //logs HTTP requests

// routes
app.use("/api/blogs", blogRoutes);
// handle unmatched routes
app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
})
// Listen to the server
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})
