const db = require('../config/db');

exports.getExerciseData = (req, res) => {
  const { name } = req.params;
  db.all(`SELECT * FROM exercises WHERE name = ?`, [name], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

exports.addExerciseData = (req, res) => {
  const { name } = req.params;
  const { reps, weight, date } = req.body;
  db.run(`INSERT INTO exercises (name, reps, weight, date) VALUES (?, ?, ?, ?)`, [name, reps, weight, date], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
};
