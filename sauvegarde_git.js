const fs = require("node:fs");
const { execSync } = require("node:child_process");
const path = require("node:path");

// Détecter la langue à utiliser pour la coloration syntaxique
function detectLanguage(file) {
	const ext = path.extname(file).slice(1);
	const map = {
		js: "javascript",
		ts: "typescript",
		sh: "bash",
		css: "css",
		html: "html",
		py: "python",
		json: "json",
		yml: "yaml",
		yaml: "yaml",
		tsx: "tsx",
		md: "markdown",
	};
	return map[ext] || "";
}

const selfName = path.basename(__filename);
const outputFile = "sauvegarde_contenu.md";

// Fichiers modifiés
const modifiedFiles = execSync("git diff --name-only", { encoding: "utf8" })
	.split("\n")
	.filter((f) => f && fs.existsSync(f) && f !== outputFile && f !== selfName);

// Fichiers non suivis
const untrackedFiles = execSync("git ls-files --others --exclude-standard", {
	encoding: "utf8",
})
	.split("\n")
	.filter((f) => f && fs.existsSync(f) && f !== outputFile && f !== selfName);

// Génération du Markdown
let output = "";

output += "## FICHIERS À MODIFIER\n";
if (modifiedFiles.length > 0) {
	for (const file of modifiedFiles) {
		const lang = detectLanguage(file);
		const content = fs.readFileSync(file, "utf8");
		output += `\n### \`${file}\`\n\`\`\`${lang}\n${content}\n\`\`\`\n`;
	}
} else {
	output += "\n_Aucun fichier modifié trouvé._\n";
}

output += "\n## NOUVEAUX FICHIERS\n";
if (untrackedFiles.length > 0) {
	for (const file of untrackedFiles) {
		const lang = detectLanguage(file);
		const content = fs.readFileSync(file, "utf8");
		output += `\n### \`${file}\`\n\`\`\`${lang}\n${content}\n\`\`\`\n`;
	}
} else {
	output += "\n_Aucun fichier non suivi trouvé._\n";
}

fs.writeFileSync(outputFile, output);
console.log(`✅ ${outputFile} généré avec succès !`);
