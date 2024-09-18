import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { GuardDutyConstruct } from '../src';

describe('GuardDuty Construct Default Parameters Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const guardDutyDetector = new GuardDutyConstruct(stack, 'GuardDutyConstructTest', {
    enableGuardDuty: true,
    kubernetesAuditLogs: true,
    malwareProtection: true,
    s3Logs: true,
  });
  it('IsInstanceOfGuardDutyConstruct', async () => {
    expect(guardDutyDetector).toBeInstanceOf(GuardDutyConstruct);
  });

  const template = Template.fromStack(stack);
  test('Should have S3 logs enabled', () => {
    template.hasResourceProperties('AWS::GuardDuty::Detector', {
      Enable: true,
      DataSources: Match.objectEquals({
        S3Logs: {
          Enable: true,
        },
        Kubernetes: {
          AuditLogs: {
            Enable: true,
          },
        },
        MalwareProtection: {
          ScanEc2InstanceWithFindings: {
            EbsVolumes: true,
          },
        },
      }),
    });
  });
});
