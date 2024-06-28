const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const users = [
    {
        username: 'Erkeb',
        password: bcrypt.hashSync('Bismillah@99', 8) // Hash the password for security
    }
];

const secretKey = 'your_secret_key'; // Use a secure key and store it in environment variables in production

// Authentication endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Login attempt: ${username}`);

    const user = users.find(u => u.username === username);

    if (!user) {
        console.log('User not found');
        return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
        console.log('Invalid password');
        return res.status(401).send({ accessToken: null, message: 'Invalid Password!' });
    }

    const token = jwt.sign({ id: user.username }, secretKey, { expiresIn: 86400 }); // 24 hours
    console.log('Login successful, token generated');

    res.status(200).send({ username: user.username, accessToken: token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    console.log(`Token received: ${token}`);

    if (!token) {
        return res.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log('Token verification failed');
            return res.status(401).send({ message: 'Unauthorized!' });
        }
        req.userId = decoded.id;
        next();
    });
};

// Example employees data
let employees = [
    {
        name: "Иван Иванов",
        position: 'Sales Manager',
        photo: '/src/assets/employee1.jpg',
        bio: 'Ivan has more than 20 years of experience in sales and clients management relationship. His hobbies are travelling and football'
    },
    {
        name: 'Maria Petrova',
        position: 'Software developer',
        photo: '/src/assets/employee2.jpg',
        bio: 'Maria is specialized on web application development and has extensive experience in Javascript and React. In her spare time she enjoys reading and learning new programming languages'
    }
];

// Protected route example to get employees
app.get('/employees', verifyToken, (req, res) => {
    res.status(200).send(employees);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
