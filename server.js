const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

// Use CORS middleware before defining routes
app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to "WaveSync" C-DAC Pune Messaging App!');
});

// Start server and listen on specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
