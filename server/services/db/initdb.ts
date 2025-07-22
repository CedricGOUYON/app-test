import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { db } from "./index";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initDB() {
	try {
		const schemaPath = path.resolve(__dirname, "../../database/schema.sql");
		const schema = readFileSync(schemaPath, "utf-8");

		const queries = schema
			.split(";")
			.map((q) => q.trim())
			.filter((q) => q.length);

		for (const query of queries) {
			await db.query(query);
		}

		console.log("✅ Base de données initialisée avec toutes les tables");
	} catch (error) {
		console.error("❌ Erreur lors de l'initialisation de la base :", error);
	}
}
