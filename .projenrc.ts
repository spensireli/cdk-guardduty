import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'spensireli',
  authorAddress: '5614310+spensireli@users.noreply.github.com',
  cdkVersion: '2.198.0',
  release: true,
  github: false,
  defaultReleaseBranch: 'main',
  name: '@spensireli/cdk-guardduty',
  description: 'Enables AWS GuardDuty with all features.',
  projenrcTs: true,
  stability: 'experimental',
  dependabot: true,
  codeCov: true,
  repositoryUrl: 'https://github.com/spensireli/cdk-guardduty.git',
  keywords: ['aws', 'cdk', 'aws-cdk', 'guardduty', 'guard', 'duty', 'security'],
  releaseToNpm: true,
  packageManager: javascript.NodePackageManager.NPM,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '22.0.0',
  workflowNodeVersion: '22.0.0',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 17 * * 0']),
    },
  },
  deps: [
    'aws-cdk-lib',
    'constructs',
  ],
  devDeps: [
    'esbuild',
    'typescript',
    'ts-jest',
  ],
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['spensireli'],
  },
  publishToPypi: {
    distName: 'spensireli.aws-cdk-guardduty',
    module: 'spensireli.aws_cdk_guardduty',
  },
  jestOptions: {
    coverage: true,
  },
  gitignore: [
    'node_modules/',
    '.DS_Store',
    '.vscode',
  ],
});

project.addTask('minor', {
  exec: 'npm version minor',
});

project.addTask('major', {
  exec: 'npm version major',
});

project.addTask('patch', {
  exec: 'npm version patch',
});
project.synth();