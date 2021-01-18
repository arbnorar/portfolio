const express = require("express");
const router = express.Router();
const Project = require("../models/project");

//get a list of projects from the db
router.get("/projects", (req, res, next) => {
  Project.find({}).then(function (projects) {
    res.send(projects);
  });
});

//add a new project to the db
router.post("/projects", (req, res, next) => {
  Project.create(req.body)
    .then(function (project) {
      res.send(project);
    })
    .catch(next);
});

//update a project in the db
router.put("/projects/:id", (req, res, next) => {
  Project.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (
    project
  ) {
    res.send(project);
  });
});

//delete a project in the db
router.delete("/projects/:id", (req, res, next) => {
  Project.findByIdAndRemove({ _id: req.params.id }).then(function (project) {
    res.send(project);
  });
});

module.exports = router;
