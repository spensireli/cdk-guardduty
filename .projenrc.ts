import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'spensireli',
  authorAddress: '5614310+spensireli@users.noreply.github.com',
  cdkVersion: '2.158.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: '@spensireli/cdk-guardduty',
  description: 'Enables AWS GuardDuty with all features.',
  projenrcTs: true,
  stability: 'experimental',
  dependabot: true,
  codeCov: true,
  repositoryUrl: 'https://github.com/spensireli/cdk-guardduty.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'guardduty', 'guard', 'duty', 'security'],
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '18.20.4',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 17 * * 0']), // every sunday (JST/MON:02:00)
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['spensireli'],
  },
  publishToPypi: {
    distName: 'spensireli.aws-cdk-guardduty',
    module: 'spensireli.aws_cdk_guardduty',
  },
  gitignore: [
    'node_modules/',
    '.DS_Store',
    '.vscode',
  ],
});
project.synth();