const express = require('express');
const dotenv = require('dotenv');
const mysql2 = require('mysql2');

const app = express();
app.use(express.json());
dotenv.config();

const db = mysql2.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
})



// Question 1 goes here

app.get('/patients', (req,res) => {
    const sql = 'SELECT patient_id,first_name,last_name,date_of_birth FROM patients';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    })
})

// Question 2 goes here

app.get('/providers', (req,res) => {
    const sql = 'SELECT first_name,last_name,provider_specialty FROM providers';
    db.query(sql, (err, results) =>{
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    })
})

// Question 3 goes here

app.get('/patient_name', (req,res) => {
    const sql = 'SELECT first_name FROM patients';
    db.query(sql, (err, results) =>{
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    })
})

// Question 4 goes here

app.get('/provider', (req,res) => {
    const sql = 'SELECT provider_specialty FROM providers';
    db.query(sql, (err, results) =>{
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    })
})


// listen to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`);
});
