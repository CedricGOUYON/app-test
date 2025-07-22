import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { createDatabaseIfNotExists } from "./src/createDatabase";

dotenv.config();

await createDatabaseIfNotExists();

export const db = mysql.createPool({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT) || 3306,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

console.log(`🗄️ using database ${process.env.DB_NAME}`);
