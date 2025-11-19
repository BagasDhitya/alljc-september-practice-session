import express from "express";
import dotenv from "dotenv";
import articleRouter from "./routers/article.router";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/articles", articleRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server running on port : ", PORT);
});
