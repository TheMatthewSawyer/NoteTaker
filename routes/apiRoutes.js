const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", function(req, res) {
  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
    .then((result) => {
      console.log(result);
      res.json({ ok: true });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;