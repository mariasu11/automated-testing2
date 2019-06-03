// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const { SpecReporter } = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  allScriptsTimeout: 300000,
  specs: [
    './testing/e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://nest-staging.eastus2.cloudapp.azure.com/tool/edit/', // 'http://localhost:4200/', // this will change based on editor or tool. https://nest-staging.eastus2.cloudapp.azure.com/tool/view OR https://nest-staging.eastus2.cloudapp.azure.com/tool/edit
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'testing/e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './dist/test_reports/e2e/'
      })
    );
  }
};
