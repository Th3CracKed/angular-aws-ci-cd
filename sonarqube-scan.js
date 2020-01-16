const scanner = require("sonarqube-scanner");

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: "http://localhost:9000/",
    options: {
      "sonar.login":"5a6d447643059768642fe0194c863023a40150d2", // TODO Export to env file
      "sonar.projectName": "angular-aws-ci-cd",
      "sonar.projectKey": "angular-aws-ci-cd",
      "sonar.projectVersion": "1.1.0",
      "sonar.sources": "src",
      "sonar.test": "src",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "coverage/report.xml"
    },
  },
  () => {
    // callback is required
  }
);