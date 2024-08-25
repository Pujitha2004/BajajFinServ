const express = require('express');
const app = express();
app.use(express.json());

// POST method
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(item => item === item.toLowerCase()).sort().pop() || '';

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",  // Replace with your actual name and DOB
        email: "your_email@college.com", // Replace with your actual email
        roll_number: "your_roll_number", // Replace with your actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: [highestLowercase]
    });
});

// GET method
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
