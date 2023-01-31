import chalk from 'chalk';
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen('ERROR') + ' ' + message)
}

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan('HELP')}
         Without parameters - show weather
         -s [CITY] for setting city
         -h for displaying help
         -t [API_KEY] for saving token
        `)
    )
}

export {printError, printSuccess, printHelp };