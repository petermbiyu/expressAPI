import { startups } from "../data.js";
export const paramRoute = (req, res) => {
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
};
