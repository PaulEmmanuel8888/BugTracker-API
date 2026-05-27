import express from "express";
const PORT = 3000;
const app = express();

let bugs = [
  {
    id: 1,
    title: "Login button unresponsive",
    description: "Login button does not respond when clicked",
    severity: "high",
    status: "open",
  },
  {
    id: 2,
    title: "Navbar overlaps content",
    description: "Navigation bar covers page content on mobile screens",
    severity: "medium",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Broken profile image",
    description: "Default avatar fails to load for new users",
    severity: "low",
    status: "open",
  },
  {
    id: 4,
    title: "Password reset email not sent",
    description: "Users do not receive reset email after request",
    severity: "high",
    status: "resolved",
  },
  {
    id: 5,
    title: "Search returns empty results",
    description: "Valid search queries return no matching data",
    severity: "high",
    status: "open",
  },
  {
    id: 6,
    title: "Dark mode toggle flickers",
    description: "Theme switch causes screen flicker before applying",
    severity: "low",
    status: "in-progress",
  },
  {
    id: 7,
    title: "Form validation error not displayed",
    description: "Users receive no feedback for invalid form inputs",
    severity: "medium",
    status: "open",
  },
  {
    id: 8,
    title: "Dashboard loads slowly",
    description: "Initial dashboard render takes more than 8 seconds",
    severity: "medium",
    status: "resolved",
  },
  {
    id: 9,
    title: "Duplicate notifications",
    description: "System sends the same notification multiple times",
    severity: "low",
    status: "open",
  },
  {
    id: 10,
    title: "Session expires too early",
    description: "Users are logged out after only 5 minutes of inactivity",
    severity: "high",
    status: "in-progress",
  },
];

//Getting all bugs
app.get("/bugs", (req, res) => {
  return res.status(200).json(bugs);
});

//Getting a specific bug by id
app.get("/bugs/:id", (req, res) => {
  const bugId = Number(req.params.id);
  const bug = bugs.find((bug) => bug.id === bugId);
  if (bug) {
    return res.status(200).json(bug);
  } else {
    return res.status(404).json({
      message: "Bug not found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`API Server running successfully at https://localhost:${PORT}`);
});
