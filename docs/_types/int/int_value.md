import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.int(42)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.int(42)

assert fake(sch) == 42
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.int(42)

assert sch == 42
```

```python
assert sch != 43  # incorrect value
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.int(42)

assert sch % 42 == schema.int(42)
```

```python
with assertRaises(SubstitutionError):
  sch % 43  # incorrect value
```

  </TabItem>

</Tabs>
