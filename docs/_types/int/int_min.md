import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.int.min(0)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

INT_MAX = 2 ** 63 - 1

sch = schema.int.min(0)

assert 0 <= fake(sch) <= INT_MAX
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.int.min(0)

assert sch == 0
assert sch == 1
```

```python
assert sch != -1  # < min
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.int.min(0)

assert sch % 0 == schema.int(0).min(0)
assert sch % 1 == schema.int(1).min(0)
```

```python
with assertRaises(SubstitutionError):
  sch % -1  # < min
```

  </TabItem>

</Tabs>
