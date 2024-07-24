const db = require('../config/db');

exports.getExerciseData = (req, res) => {
  console.log('GET request received for:', req.params.name);
  const { name } = req.params;
  db.all(`SELECT * FROM exercises WHERE name = ?`, [name], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

exports.addExerciseData = (req, res) => {
  console.log('POST request received for:', req.params.name);
  const { name } = req.params;
  const { reps, weight, date } = req.body;
  console.log('Data to insert:', name, reps, weight, date);
  db.run(`INSERT INTO exercises (name, reps, weight, date) VALUES (?, ?, ?, ?)`, [name, reps, weight, date], function(err) {
    if (err) {
      console.error('Error inserting data:', err.message);
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
};
