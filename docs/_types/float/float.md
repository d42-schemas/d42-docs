import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.float
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.float

assert isinstance(fake(sch), float)
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.float

assert sch == 3.14
```

```python
assert sch != 3  # incorrect type
assert sch != "3.14"  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.float

assert sch % 3.14 == schema.float(3.14)
```

```python
with assertRaises(SubstitutionError):
  sch % 3  # incorrect type
```

  </TabItem>

</Tabs>
