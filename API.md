# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuardDutyConstruct <a name="GuardDutyConstruct" id="cdk-guardduty.GuardDutyConstruct"></a>

#### Initializers <a name="Initializers" id="cdk-guardduty.GuardDutyConstruct.Initializer"></a>

```typescript
import { GuardDutyConstruct } from 'cdk-guardduty'

new GuardDutyConstruct(scope: Construct, id: string, props?: GuardDutyConstructProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-guardduty.GuardDutyConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-guardduty.GuardDutyConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-guardduty.GuardDutyConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-guardduty.GuardDutyConstructProps">GuardDutyConstructProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-guardduty.GuardDutyConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-guardduty.GuardDutyConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="cdk-guardduty.GuardDutyConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-guardduty.GuardDutyConstructProps">GuardDutyConstructProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-guardduty.GuardDutyConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-guardduty.GuardDutyConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-guardduty.GuardDutyConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-guardduty.GuardDutyConstruct.isConstruct"></a>

```typescript
import { GuardDutyConstruct } from 'cdk-guardduty'

GuardDutyConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-guardduty.GuardDutyConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-guardduty.GuardDutyConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-guardduty.GuardDutyConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### GuardDutyConstructProps <a name="GuardDutyConstructProps" id="cdk-guardduty.GuardDutyConstructProps"></a>

#### Initializer <a name="Initializer" id="cdk-guardduty.GuardDutyConstructProps.Initializer"></a>

```typescript
import { GuardDutyConstructProps } from 'cdk-guardduty'

const guardDutyConstructProps: GuardDutyConstructProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-guardduty.GuardDutyConstructProps.property.enableGuardDuty">enableGuardDuty</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-guardduty.GuardDutyConstructProps.property.kubernetesAuditLogs">kubernetesAuditLogs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-guardduty.GuardDutyConstructProps.property.malwareProtection">malwareProtection</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-guardduty.GuardDutyConstructProps.property.s3Logs">s3Logs</a></code> | <code>boolean</code> | *No description.* |

---

##### `enableGuardDuty`<sup>Optional</sup> <a name="enableGuardDuty" id="cdk-guardduty.GuardDutyConstructProps.property.enableGuardDuty"></a>

```typescript
public readonly enableGuardDuty: boolean;
```

- *Type:* boolean

---

##### `kubernetesAuditLogs`<sup>Optional</sup> <a name="kubernetesAuditLogs" id="cdk-guardduty.GuardDutyConstructProps.property.kubernetesAuditLogs"></a>

```typescript
public readonly kubernetesAuditLogs: boolean;
```

- *Type:* boolean

---

##### `malwareProtection`<sup>Optional</sup> <a name="malwareProtection" id="cdk-guardduty.GuardDutyConstructProps.property.malwareProtection"></a>

```typescript
public readonly malwareProtection: boolean;
```

- *Type:* boolean

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="cdk-guardduty.GuardDutyConstructProps.property.s3Logs"></a>

```typescript
public readonly s3Logs: boolean;
```

- *Type:* boolean

---



