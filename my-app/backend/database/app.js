const express = require('express');
const app = express();
const database = require('./dbconnector.js'); // Bruk MariaDB-tilkoblingen
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto'); 

// Aktiver CORS for alle ruter
app.use(cors());

// Middleware for å parse JSON-innhold
app.use(bodyParser.json()); // For å håndtere JSON-data

const port = 3000;

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route for å hente ut e-post
app.get('/email', async (req, res) => {
    const query = 'SELECT email FROM Accounts';
    try {
        const kunder = await database.query(query);
        res.send(kunder);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error executing query');
    }
});

// Route for å hente ut telefonnummer
app.get('/phonenumber', async (req, res) => {
    const query = 'SELECT phonenumber FROM Accounts';
    try {
        const kunder = await database.query(query);
        res.send(kunder);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error executing query');
    }
});

// Route for å hente ut all brukerdata
app.get('/userData', async (req, res) => {
    const query = 'SELECT * FROM Accounts';
    try {
        const kunder = await database.query(query);
        res.send(kunder);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error executing query');
    }
});

// Route for registrering av bruker
app.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phonenumber, password } = req.body;
    const hashedPassord = hashPassword(password);

    try {
        const checkQuery = 'SELECT * FROM Accounts WHERE email = ? OR phonenumber = ?';
        const existingUsers = await database.query(checkQuery, [email, phonenumber]);

        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'Email or phone number already exists!' });
        }

        const insertQuery = `INSERT INTO Accounts (firstname, lastname, email, phonenumber, password) VALUES (?, ?, ?, ?, ?)`;
        await database.query(insertQuery, [firstname, lastname, email, phonenumber, hashedPassord]);
        
        res.status(201).json({ alert: 'User registered successfully!, log in to continue' });
    } catch (error) {
        console.error('Error inserting user into database:', error);
        res.status(500).json({ message: 'Error registering user.' });
    }
});

// Route for å logge innloggingsforsøk
app.post('/log-login', async (req, res) => {
    const { userID, ip, userAgent, status } = req.body;
    const timestamp = new Date();
    
    try {
        const insertQuery = 'INSERT INTO login_logs (userID, timestamp, ip, userAgent, status) VALUES (?, ?, ?, ?, ?)';
        await database.query(insertQuery, [userID, timestamp, ip, userAgent, status]);
        res.status(201).json({ message: 'Login logged successfully' });
    } catch (error) {
        console.error('Error logging login attempt:', error);
        res.status(500).json({ message: 'Error logging login attempt' });
    }
});

// Route for å hente innloggingslogger
app.get('/get-login-logs', async (req, res) => {
    const query = 'SELECT * FROM login_logs ORDER BY timestamp DESC';
    try {
        const logs = await database.query(query);
        res.send(logs);
    } catch (error) {
        console.error('Error retrieving login logs:', error);
        res.status(500).send('Error retrieving login logs');
    }
});

// Start serveren
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
