import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

export async function createDatabaseIfNotExists() {
	const connection = await mysql.createConnection({
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT) || 3306,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	});

	await connection.query(
		`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`,
	);
	console.log(`Base de données ${process.env.DB_NAME} créée ou déjà existante`);

	await connection.end();
}
