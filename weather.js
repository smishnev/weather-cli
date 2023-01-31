#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

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

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        return saveToken(args.t)
    }
    getWeather('mykolaiv')
    //show weather
};

initCLI();