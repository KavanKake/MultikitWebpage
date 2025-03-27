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




// Route for å hente ut all brukerdata
app.get('/userdata', async (req, res) => {
    const query = 'SELECT * FROM Accounts';
    try {
        const kunder = await database.query(query);
        res.send(kunder);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Error executing query');
    }
});

// Route for å håndtere sign-up
app.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phonenumber, password } = req.body;
    const hashedPassord = hashPassword(password);

    try {
        // Sjekk om e-post eller telefonnummer allerede eksisterer
        const checkQuery = 'SELECT * FROM Accounts WHERE email = ? OR phonenumber = ?';
        const existingUsers = await database.query(checkQuery, [email, phonenumber]);

        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'Email or phone number already exists!' });
        }

        // Hvis ingen eksisterende bruker, sett inn ny bruker
        const insertQuery = `INSERT INTO Accounts (firstname, lastname, email, phonenumber, password) VALUES (?, ?, ?, ?, ?)`;
        await database.query(insertQuery, [firstname, lastname, email, phonenumber, hashedPassord]);
        
        res.status(201).json({ 
            alert : 'User registered successfully!, log in to continue',
        });

    } catch (error) {
        console.error('Error inserting user into database:', error);
        res.status(500).json({ message: 'Error registering user.' });
    }
});

// Start serveren
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
