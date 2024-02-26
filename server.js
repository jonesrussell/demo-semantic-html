const express = require('express');
const path = require('path');

const app = express();
const PORT =  3000;

// Serve static files from the src directory
app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});