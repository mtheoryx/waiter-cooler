exports.config = {
    capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
            'args': ['--no-sandbox', '--test-type=browser'],
            'prefs': {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': '/tmp'
                }
            }
        },
        shardTestFiles: (process.env.maxInstances > 1),
        maxInstances: process.env.maxInstances
    },
    baseUrl: 'http://localhost:8888',
    allScriptsTimeout: 200000,
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 600000
    }
};