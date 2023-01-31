#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp, printError, printSuccess, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKey } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('Not have token')

        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token was saved successfully')
    } catch (error) {
        printError(error.message);
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Not have city')

        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City was saved successfully')
    } catch (error) {
        printError(error.message);
    }
}

const getForcast = async () => {
    try {
        const city = await getKey(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city);

        printWeather(weather, getIcon(weather.weather[0].icon))
        
    } catch (error) {
        if (error?.response?.status == 404 ) {
            printError('Wrong city')
        } else if (error?.response?.status == 401) {
            printError('Wrong token')
        } else {
            printError(error.message)            
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        return saveCity(args.s)
    }
    if (args.t) {
        return saveToken(args.t)
    }
    return getForcast()
};

initCLI();