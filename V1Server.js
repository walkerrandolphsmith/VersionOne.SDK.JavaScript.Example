const axios = require('axios');
const v1sdk = require('v1sdk/dist/index');
const sdk = v1sdk.default;
const axiosConnector = v1sdk.axiosConnector;

const axiosConnectedSdk = axiosConnector(axios)(sdk);
module.exports = axiosConnectedSdk('V1Host', 'v1Instance')
    .withCreds('v1User', 'v1Password');