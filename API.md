# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuardDutyConstruct <a name="GuardDutyConstruct" id="@spensireli/cdk-guardduty.GuardDutyConstruct"></a>

#### Initializers <a name="Initializers" id="@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer"></a>

```typescript
import { GuardDutyConstruct } from '@spensireli/cdk-guardduty'

new GuardDutyConstruct(scope: Construct, id: string, props?: GuardDutyConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstructProps">GuardDutyConstructProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@spensireli/cdk-guardduty.GuardDutyConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#@spensireli/cdk-guardduty.GuardDutyConstructProps">GuardDutyConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@spensireli/cdk-guardduty.GuardDutyConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@spensireli/cdk-guardduty.GuardDutyConstruct.isConstruct"></a>

```typescript
import { GuardDutyConstruct } from '@spensireli/cdk-guardduty'

GuardDutyConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@spensireli/cdk-guardduty.GuardDutyConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstruct.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@spensireli/cdk-guardduty.GuardDutyConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@spensireli/cdk-guardduty.GuardDutyConstruct.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### GuardDutyConstructProps <a name="GuardDutyConstructProps" id="@spensireli/cdk-guardduty.GuardDutyConstructProps"></a>

#### Initializer <a name="Initializer" id="@spensireli/cdk-guardduty.GuardDutyConstructProps.Initializer"></a>

```typescript
import { GuardDutyConstructProps } from '@spensireli/cdk-guardduty'

const guardDutyConstructProps: GuardDutyConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstructProps.property.enableGuardDuty">enableGuardDuty</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstructProps.property.kubernetesAuditLogs">kubernetesAuditLogs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstructProps.property.malwareProtection">malwareProtection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@spensireli/cdk-guardduty.GuardDutyConstructProps.property.s3Logs">s3Logs</a></code> | <code>boolean</code> | *No description.* |

---

##### `enableGuardDuty`<sup>Optional</sup> <a name="enableGuardDuty" id="@spensireli/cdk-guardduty.GuardDutyConstructProps.property.enableGuardDuty"></a>

```typescript
public readonly enableGuardDuty: boolean;
```

- *Type:* boolean

---

##### `kubernetesAuditLogs`<sup>Optional</sup> <a name="kubernetesAuditLogs" id="@spensireli/cdk-guardduty.GuardDutyConstructProps.property.kubernetesAuditLogs"></a>

```typescript
public readonly kubernetesAuditLogs: boolean;
```

- *Type:* boolean

---

##### `malwareProtection`<sup>Optional</sup> <a name="malwareProtection" id="@spensireli/cdk-guardduty.GuardDutyConstructProps.property.malwareProtection"></a>

```typescript
public readonly malwareProtection: boolean;
```

- *Type:* boolean

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="@spensireli/cdk-guardduty.GuardDutyConstructProps.property.s3Logs"></a>

```typescript
public readonly s3Logs: boolean;
```

- *Type:* boolean

---



