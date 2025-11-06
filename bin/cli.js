#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import chalk from "chalk";
import process from "process";
import os from "os";

const cwd = process.env.INIT_CWD || process.cwd();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log(chalk.cyan("\n🚀 Bienvenido al generador de proyectos Readx!\n"));

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Nombre del nuevo proyecto:",
      default: "my-readx-app",
    },
  ]);

  const dest = path.resolve(cwd, projectName);

  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "Selecciona el tipo de proyecto:",
      choices: [
        { name: "Proyecto Readx SPA (Single Page Application)", value: "spa" },
      ],
      default: "spa",
    },
  ]);

  const templateDir = path.resolve(__dirname, "../templates/", type);

  if (!fs.existsSync(dest)) {
    console.error(
      chalk.red(`❌ Error: no se creó la carpeta destino: ${dest}`)
    );
    process.exit(1);
  }

  if (fs.existsSync(dest)) {
    console.log(chalk.red(`❌ La carpeta ${projectName} ya existe.`));
    process.exit(1);
  }

  console.log(chalk.gray("📦 Copiando archivos..."));
  await fs.copy(templateDir, dest, {
    filter: (src) => !src.includes("node_modules") && !src.includes(".git"),
  });

  // Actualiza el nombre del package.json
  const pkgPath = path.join(dest, "package.json");
  if (await fs.pathExists(pkgPath)) {
    const pkg = await fs.readJson(pkgPath);
    pkg.name = projectName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });
  }

  console.log(chalk.green("\n✅ Proyecto creado con éxito!\n"));
  console.log("👉 Siguientes pasos:\n");
  console.log(chalk.yellow(`  cd ${projectName}`));
  console.log("  npm install");
  console.log("  npm run dev\n");
}

main().catch((err) => {
  console.error(chalk.red(err));
  process.exit(1);
});
