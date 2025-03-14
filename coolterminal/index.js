import chalk from "chalk";
import cows from "cows";

export default function coolsolelog(message) {
    const cow = cows()[Math.floor(Math.random() * cows().length)];
    console.log(chalk.blue.bold(`\n${cow}\n`) + chalk.green(message));
}
