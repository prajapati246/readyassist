import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id= ?";
    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        const { password, ...info } = data[0];
        return res.json(info);
    })
};


export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q = "UPDATE users SET `name`=?,`city`=? ,`website`=?,`profilePic`=?,`phonenumber`=?,`email`=? WHERE id =?";
        db.query(q, [req.body.name,
        req.body.city,
        req.body.website,
        req.body.profilePic,
        req.body.phonenumber,
        req.body.email,
        userInfo.id
        ], (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.affectedRows > 0) return res.status(200).json("Updated!");
            return res.status(403).json("You can update only your profile.")
        })
    })
};


export const changePassword = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("token is not valid!");

        const userId = userInfo.id;
        const { oldPassword, newPassword } = req.body;

        const q = "SELECT password FROM users WHERE id =?";
        db.query(q, [userId], async (err, data) => {
            if (err) return res.status(500).json(err);
            if (data.length === 0) return res.status(404).json("User not found!");

            const storedPassword = data[0].password;

            const isMatch = await bcrypt.compare(oldPassword, storedPassword);
            if (!isMatch) return res.status(400).json("Incorrect old password!");

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);

            const updateQuery = "UPDATE users SET password = ? WHERE id = ?";
            db.query(updateQuery, [hashedPassword, userId], (err, result) => {
                if (err) return res.status(500).json(err);
                return res.status(200).json("Password updated successfully!");
            });
        });
    });
};