const scanner = require('sonarqube-scanner');

scanner(
    {
    // this example uses local instance of SQ
        serverUrl: 'http://54.198.187.82',
        options: {
            'sonar.login':'646fbf98fb9db34f2536aa8fb73e55ca5c5ea0c5', // TODO Export to env file
            'sonar.projectName': 'angular-aws-ci-cd',
            'sonar.projectKey': 'angular-aws-ci-cd',
            'sonar.projectVersion': '1.1.0',
            'sonar.sources': 'src',
            'sonar.test': 'src',
            'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'coverage/sonarqube/report.xml',
            'sonar.typescript.tslint.reportPaths': 'coverage/linter/report.json'
        },
    },
    () => {
    // callback is required
    }
);
