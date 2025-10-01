import express from "express";
import cors from "cors";

// server creation
const PORT = 8000;
const app = express();
app.listen(PORT, "localhost", () => console.log(`Connected at port ${PORT}`));

//middleware
app.use(cors());

// routing
app.get("/api", (req, res) => {
  res.status(200).json({ message: "Hello from the other side" });
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found.. :(" });
});
