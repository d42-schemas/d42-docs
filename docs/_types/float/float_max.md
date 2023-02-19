import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.float.max(0.0)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.float.max(0.0)

assert fake(sch) <= 0.0
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.float.max(0.0)

assert sch == 0.0
assert sch == -0.1
```

```python
assert sch != 0.1  # > max
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.float.max(0.0)

assert sch % 0.0 == schema.float(0.0).max(0.0)
assert sch % -0.1 == schema.float(-0.1).max(0.0)
```

```python
with assertRaises(SubstitutionError):
  sch % 0.1  # > max
```

  </TabItem>

</Tabs>
