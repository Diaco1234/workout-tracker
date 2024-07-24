const express = require('express');
const cors = require('cors');
const exerciseRoutes = require('./routes/exerciseRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/exercises', exerciseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
