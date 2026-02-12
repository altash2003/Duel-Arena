const express = require('express');
const path = require('path');
const app = express();

// CRITICAL: Railway assigns a port automatically. 
// We must use process.env.PORT, otherwise it defaults to 3000 locally.
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// basic route to ensure index.html loads
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen on 0.0.0.0 to allow external connections (Required for Railway)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
