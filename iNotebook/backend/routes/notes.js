const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchUser");

// ROUTE 1: get all the notes: GET "api/auth/fetchallnotes". No login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new note using: POST "api/auth/addnote". No login required
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("tag", "Password must be atleast 5 characters")
      .default("general")
      .isLength({
        min: 1,
      }),
  ],
  async (req, res) => {
    try {
      const { title, description, tags } = req.body;

      //if there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = await new Notes({
        title,
        description,
        tags,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  },
);

module.exports = router;
