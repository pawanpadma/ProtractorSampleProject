var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    capabilities: {
        'browserName': 'firefox'
      },
    allScriptsTimeout: 99999,
    
    framework: 'jasmine',    
    seleniumAddress: 'http://localhost:4444/wd/hub',
   // specs: ['./specs/PortalTests.js'],
    specs: ['./specs/PortalTests.js'],
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                savePath: './test/reports/',
                screenshotsFolder: 'images',
                cleanDestination: true,
                showPassed: true,
                fileName: 'PortalAutomationReport',
                fileNameSeparator: '_',
                fileNamePrefix: '',
                fileNameSuffix: '',
                fileNameDateSuffix: true
            })
        );
    },
    params: {
        testdata: require('./data.json')
    },
 
  
  jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true,
        includeStackTrace: true
    }
    
  
    
  
}