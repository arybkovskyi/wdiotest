module.exports = {
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://localcoding.us/',
    waitForTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
}