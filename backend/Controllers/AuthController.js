const userModel = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const signup = async (req, res) => {
    try {
        const { name, email, age, dateOfBirth, password, gender, about } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists!' });
        }
        const newUser = new userModel({ name, email, age, dateOfBirth, password: await bcrypt.hash(password, 10), gender, about });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!', success: false, error: err });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }); // Ensure consistent case
        const errorMsg = 'Auth failed: email or password is wrong';
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);

        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}


const updateUser = async (req, res) => {
    try {
        const { userId, name, email, age, dateOfBirth, password, gender, about } = req.body;
        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.age = age || user.age;
        user.dateOfBirth = dateOfBirth || user.dateOfBirth;
        user.gender = gender || user.gender;
        user.about = about || user.about;

        await user.save();

        res.status(200).json({ message: 'User updated successfully', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', success: false, error: err });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid userId format', success: false });
        }
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        res.status(200).json({ message: 'User deleted successfully', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error', success: false, error: err.message || err });
    }
}


module.exports = { signup, login, updateUser, deleteUser };
