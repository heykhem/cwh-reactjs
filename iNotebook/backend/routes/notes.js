const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Notes = require("../models/Notes");
const fetchUser = require("../middleware/fetchUser");

// ROUTE 1: get all the notes: GET "api/auth/fetchallnotes". login required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add a new note using: POST "api/auth/addnote". login required
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

// ROUTE 3: update an existing note: PUT "api/auth/updatenote".login required
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description, tags } = req.body;

  try {
    // create a newNote object
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tags) newNote.tags = tags;

    // find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).send("Not found");

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { returnDocument: "after" },
    );

    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: delete an existing note: DELETE "api/auth/deletenote".login required
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    // find the note to delete and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).send("Not found");

    // allow deletion only if users own this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: "note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
