import express from "express";
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  console.log("Running");
});

app.listen(PORT, () => {
  console.log(`API Server running successfully at https://localhost:${PORT}`);
});
