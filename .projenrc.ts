import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'spensireli',
  authorAddress: '5614310+spensireli@users.noreply.github.com',
  cdkVersion: '2.158.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk-guardduty',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:spensireli/cdk-guardduty.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'guardduty', 'guard', 'duty', 'security'],
  gitignore: [
    'node_modules/',
    '.DS_Store',
    '.vscode',
  ],
});
project.synth();