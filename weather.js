#!/usr/bin/env node
import {getArgs} from './helpers/args.js';
import { printHelp, printError, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
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
    //show weather
};

initCLI();