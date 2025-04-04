'use strict';

const express = require('express');
const app = express();

// Exercise 1: Splendid Circles
app.get('/math/circle/:r', (req, res) => {
    const radius = parseFloat(req.params.r);
    if (isNaN(radius) || radius <= 0) {
        res.type('text').status(400).send('Error: Radius must be a positive number');
    } else {
        const area = Math.PI * radius * radius;
        const circumference = Math.PI * 2 * radius;
        res.json({ area: area, circumference: circumference });
    }
});

// Exercise 2: Hello, you!
app.get('/hello/name', (req, res) => {
    const firstName = req.query.first;
    const lastName = req.query.last;

    if (!firstName || !lastName) {
        let missingParams = [];
        if (!firstName) missingParams.push('first');
        if (!lastName) missingParams.push('last');
        res.type('text').status(400).send(`Missing Required GET parameters: ${missingParams.join(', ')}`);
    } else {
        res.type('text').send(`Hello ${firstName} ${lastName}`);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
