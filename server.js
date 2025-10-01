import express from "express";
import cors from "cors";
import { apiRouter } from "./router/router.js";

// server creation
const PORT = 8000;
const app = express();
app
  .listen(PORT, "localhost", () => console.log(`Connected at port ${PORT}`))
  .on("error", () => console.log("failed to connect"));

//middleware
app.use(cors());

// routing
app.use("/api", apiRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found.. :(" });
});
