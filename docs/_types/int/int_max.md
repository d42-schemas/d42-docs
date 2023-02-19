import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.int.max(0)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

INT_MIN = -(2 ** 63)

sch = schema.int.max(0)

assert INT_MIN <= fake(sch) <= 0
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.int.max(0)

assert sch == 0
assert sch == -1
```

```python
assert sch != 1  # > max
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.int.max(0)

assert sch % 0 == schema.int(0).max(0)
assert sch % -1 == schema.int(-1).max(0)
```

```python
with assertRaises(SubstitutionError):
  sch % 1  # > max
```

  </TabItem>

</Tabs>
