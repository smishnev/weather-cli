import chalk from 'chalk';
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message)
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

const printWeather = (res, icon) => {
    console.log(
        dedent(`${chalk.bgYellow('WEATHER')} The weather in city ${res.name}
        ${icon} ${res.weather[0].description}
        Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `)
    )

}

export {printError, printSuccess, printHelp, printWeather };