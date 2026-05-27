import express from "express";
import bodyParser from "body-parser";
const PORT = 3000;
const app = express();

//Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
const validSeverities = ["low", "medium", "high"];
const validStatuses = ["open", "in-progress", "resolved"];

//Getting all bugs
app.get("/bugs", (req, res) => {
  return res.status(200).json(bugs);
});

//Getting a specific bug by id
app.get("/bugs/:id", (req, res) => {
  const bugId = parseInt(req.params.id);
  const bug = bugs.find((bug) => bug.id === bugId);
  if (bug) {
    return res.status(200).json(bug);
  } else {
    return res.status(404).json({
      message: "Bug not found",
    });
  }
});

//Posting a bug
app.post("/bugs", (req, res) => {
  const { title, description, severity, status } = req.body || {};

  if (!title || !description || !severity || !status) {
    return res.status(400).json({
      message: "All fields are required",
    });
  } else {
    if (typeof title !== "string" || typeof description !== "string") {
      return res.status(400).json({
        message: "Title and description must be strings",
      });
    } else {
      //validation for the title length
      if (title.length < 5 || title.length > 100) {
        return res.status(400).json({
          message: "Title must be between 5 and 100 characters",
        });
      } else {
        //validation for the description length
        if (description.length < 10) {
          return res.status(400).json({
            message: "Description must be at least 10 characters",
          });
        } else {
          //validation for the accepted severity ratings
          if (!validSeverities.includes(severity)) {
            return res.status(400).json({
              message: "Severity must be low, medium, or high",
            });
          } else {
            if (!validStatuses.includes(status)) {
              return res.status(400).json({
                message: "Status must be open, in-progress, or resolved",
              });
            } else {
              const newBug = {
                id: bugs.length + 1,
                title,
                description,
                severity,
                status,
              };
              bugs.push(newBug);
              return res.status(201).json({
                message: "Bug created successfully",
                bug: newBug,
              });
            }
          }
        }
      }
    }
  }
});

//For editing a bug
app.put("/bugs/:id", (req, res) => {
  const bugId = parseInt(req.params.id);
  const { title, description, severity, status } = req.body || {};
  const bug = bugs.find((bug) => bug.id === bugId);

  if (!bug) {
    return res.status(404).json({
      message: "Bug not found",
    });
  } else {
    if (severity && !["low", "medium", "high"].includes(severity)) {
      return res.status(400).json({
        message: "Invalid severity",
      });
    }
    if (status && !["open", "in-progress", "resolved"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
      });
    }
    if (title) bug.title = title;
    if (description) bug.description = description;
    if (severity) bug.severity = severity;
    if (status) bug.status = status;
    return res.status(200).json({
      message: "Bug updated successfully",
      bug,
    });
  }
});

//Deleting a bug
app.delete("/bugs/:id", (req, res) => {
  const bugId = parseInt(req.params.id);
  const bugIndex = bugs.findIndex((bug) => bug.id === bugId);
  if (bugIndex < 0) {
    return res.status(404).json({
      message: "Bug not found",
    });
  }
  bugs.splice(bugIndex, 1);
  return res.status(200).json({
    message: "Bug deleted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`API Server running successfully at https://localhost:${PORT}`);
});
