const { execSync } = require("node:child_process");

console.log("🔧 Installation des dépendances...");

try {
	execSync("npm install", { stdio: "inherit" });
	execSync("npm install --prefix client", { stdio: "inherit" });
	execSync("npm install --prefix server", { stdio: "inherit" });

	console.log("✅ Installation terminée !");
} catch (error) {
	console.error(
		"❌ Une erreur est survenue pendant l'installation :",
		error.message,
	);
	process.exit(1);
}
