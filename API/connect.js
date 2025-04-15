import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "dev12345",
    database: "readyassist",
    charset: 'utf8mb4'
});