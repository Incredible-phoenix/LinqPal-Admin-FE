
const configGlobal = require('./config-global');

module.exports = {
    BACKEND_GRAPHQL_URL: configGlobal.BACKEND_GRAPHQL_URL || '',
    ROWS_ON_PAGE: 8,
    DEBOUNCE_DELAY: 400,
    GOOGLE_TRANSLATE_API_KEY: 'AIzaSyDUjSZKgK7MVv8H6uMqiHFCN5DJ_d8FWy0', //'AIzaSyBqh76LLAhkYRl5iLHShv_17JC0I07f-sc' // 
    /*
    ** GOOGLE_TRANSLATE_API_KEY
    ** https://translatepress.com/docs/automatic-translation/generate-google-api-key/
    */
}
