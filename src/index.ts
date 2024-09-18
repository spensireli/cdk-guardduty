import * as gd from 'aws-cdk-lib/aws-guardduty';
import { Construct } from 'constructs';

export interface GuardDutyConstructProps {
  readonly enableGuardDuty?: boolean;
  readonly kubernetesAuditLogs?: boolean;
  readonly malwareProtection?: boolean;
  readonly s3Logs?: boolean;
  // readonly runtimeMonitoring?: boolean;
}

export class GuardDutyConstruct extends Construct {
  public detectorId: string;
  constructor(scope: Construct, id: string, props?: GuardDutyConstructProps) {
    super(scope, id);
    const enableGuardDuty: boolean = props?.enableGuardDuty ?? true;
    const kubernetesAuditLogs: boolean = props?.kubernetesAuditLogs ?? true;
    const malwareProtection: boolean = props?.malwareProtection ?? true;
    const s3Logs: boolean = props?.s3Logs ?? true;
    // const runtimeMonitoring: boolean = props?.runtimeMonitoring ?? true;

    const guardDuty = new gd.CfnDetector(this, 'GuardDutyDetector', {
      enable: enableGuardDuty,
      dataSources: {
        kubernetes: {
          auditLogs: {
            enable: kubernetesAuditLogs,
          },
        },
        malwareProtection: {
          scanEc2InstanceWithFindings: {
            ebsVolumes: malwareProtection,
          },
        },
        s3Logs: {
          enable: s3Logs,
        },
      },
      features: [
        {
          name: 'RUNTIME_MONITORING',
          status: 'ENABLED',
        },
      ],
    });
    this.detectorId = guardDuty.attrId;
  }
}