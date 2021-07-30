"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configObj = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
const envDevelopmentName = 'development';
const env = process.env.NODE_ENV || envDevelopmentName;
const configs = {
    base: {
        ENV: env,
        DEV: env === envDevelopmentName,
        NAME: process.env.APP_NAME || 'nestjs-es',
        TITLE: process.env.APP_TITLE || 'Devices',
        DESCRIPTION: process.env.APP_DESCRIPTION || 'Devices API Microservice',
        PREFIX: process.env.APP_PREFIX || 'v1',
        VERSION: process.env.APP_VERSION || '1.0',
        API_EXPLORER_PATH: process.env.APP_API_EXPLORER_PATH || '/api',
        HOST: process.env.APP_HOST || '0.0.0.0',
        PORT: process.env.APP_PORT || 7070,
        EVENT_STORE_SETTINGS: {
            protocol: process.env.EVENT_STORE_PROTOCOL || 'http',
            hostname: process.env.EVENT_STORE_HOSTNAME || '0.0.0.0',
            tcpPort: process.env.EVENT_STORE_TCP_PORT || 1113,
            httpPort: process.env.EVENT_STORE_HTTP_PORT || 2113,
            credentials: {
                username: process.env.EVENT_STORE_CREDENTIALS_USERNAME || 'admin',
                password: process.env.EVENT_STORE_CREDENTIALS_PASSWORD || 'changeit',
            },
            poolOptions: {
                min: process.env.EVENT_STORE_POOLOPTIONS_MIN || 1,
                max: process.env.EVENT_STORE_POOLOPTIONS_MAX || 10,
            },
        },
    },
    development: {},
    production: {
        PORT: process.env.APP_PORT || 7071,
    },
    test: {
        PORT: 7072,
    },
};
const configObj = Object.assign(Object.assign({}, configs.base), configs[env]);
exports.configObj = configObj;
//# sourceMappingURL=config.js.map