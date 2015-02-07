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
        }
    },
    baseUrl: 'http://localhost:8888',
    allScriptsTimeout: 200000
};