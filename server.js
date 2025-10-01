import express from "express";
import cors from "cors";
import { startups } from "./data.js";

// server creation
const PORT = 8000;
const app = express();
app
  .listen(PORT, "localhost", () => console.log(`Connected at port ${PORT}`))
  .on("error", () => console.log("failed to connect"));

//middleware
app.use(cors());

// routing
app.get("/api", (req, res) => {
  let filteredData = startups;
  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;
  if (industry) {
    filteredData = filteredData.filter(
      (data) => data.industry.toLowerCase() === industry.toLowerCase()
    );
  }
  if (country) {
    filteredData = filteredData.filter(
      (data) => data.country.toLowerCase() === country.toLowerCase()
    );
  }
  if (continent) {
    filteredData = filteredData.filter(
      (data) => data.continent.toLowerCase() === continent.toLowerCase()
    );
  }
  if (is_seeking_funding) {
    filteredData = filteredData.filter(
      (data) =>
        data.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
    );
  }
  if (has_mvp) {
    filteredData = filteredData.filter(
      (data) => data.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.status(200).json(filteredData);
});
app.get("/api/:field/:term", (req, res) => {
  let filteredData = startups;
  const { field, term } = req.params;
  const allowedField = ["country", "continent", "industry"];
  if (!allowedField.includes(field)) {
    filteredData = {
      message:
        "Search field not allowed. Please use only 'country','continent', 'industry'",
    };
    return res.status(400).json(filteredData);
  }
  filteredData = filteredData.filter(
    (startup) => startup[field].toLowerCase() === term.toLowerCase()
  );
  res.status(200).json(filteredData);
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found.. :(" });
});
