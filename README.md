# cdk-guardduty
[![codecov](https://codecov.io/gh/spensireli/cdk-guardduty/graph/badge.svg?token=YVFUKBJE93)](https://codecov.io/gh/spensireli/cdk-guardduty)

Enables GuardDuty and allows for enabling of all or some features.

By default
- GuardDuty Detector is Created
- GuardDuty Detector is Enabled
- Kubernetes Audit Log Monitoring is Enabled
- Malware Protection Monitoring is Enabled
- S3 Logs Monitoring is Enabled
- Runtime Monitoring is Enabled


## Example

### Default Enable All
```typescript
import { GuardDutyConstruct } from '@spensireli/cdk-guardduty';
new GuardDutyConstruct(stack, 'GuardDutyConstructTest');
```

### Choose Features to Enable
```typescript
import { GuardDutyConstruct } from '@spensireli/cdk-guardduty';
new GuardDutyConstruct(stack, 'GuardDutyConstructTest', {
    enableGuardDuty: true,
    kubernetesAuditLogs: true,
    malwareProtection: true,
    s3Logs: true,
  });
```