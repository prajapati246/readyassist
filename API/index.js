import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cors from 'cors';
import multer from 'multer';
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "../readyAssist/public/upload");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
};

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

const storage = multer.diskStorage({

    destination: function (req, res, cb) {
        cb(null,
            uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    },
});


export const upload = multer({ storage: storage });


app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json({ filename: file.filename });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(7700, () => {
    console.log("API working");
});
