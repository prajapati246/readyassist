import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");

        if (!req.body.password) {
            return res.status(400).json({ error: "Password is required" });
        }

        const password = req.body.password.toString();

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`, `phonenumber`) VALUES (?)";

        const values = [
            req.body.username,
            req.body.email,
            hashedPassword,
            req.body.phonenumber.toString(),
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found");

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if (!checkPassword) return res.status(400).json("Wrong password or username");

        const token = jwt.sign({ id: data[0].id }, "secretkey");
        const { password, ...others } = data[0];

        res
            .cookie('accessToken', token, {
                httpOnly: true
            })
            .status(200)
            .json(others);
    });
};

export const logout = (req, res) => {
    res.send("Logout successful");
};

export const forgotPassword = (req, res) => {
    const { email } = req.body;

    const q = "SELECT * FROM users WHERE  email=?";
    db.query(q, [email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");
        return res.status(200).json({ message: "Email verified! You can now reset your password.", userId: data[0].id });
    });
};

export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const updateQuery = "UPDATE users SET password=? WHERE email =?";
    db.query(updateQuery, [hashedPassword, email], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0) return res.status(404).json("User not found!");
        return res.status(200).json("Password updated successfully!");
    });
};