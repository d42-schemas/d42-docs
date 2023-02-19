import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.int
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

INT_MIN = -(2 ** 63)
INT_MAX = 2 ** 63 - 1

sch = schema.int

assert INT_MIN <= fake(sch) <= INT_MAX
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.int

assert sch == 42
```

```python
assert sch != 3.14  # incorrect type
assert sch != "42"  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.int

assert sch % 42 == schema.int(42)
```

```python
with assertRaises(SubstitutionError):
  sch % "42"  # incorrect type
```

  </TabItem>

</Tabs>
