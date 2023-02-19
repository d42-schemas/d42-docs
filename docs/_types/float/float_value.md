import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.float(3.14)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.float(3.14)

assert fake(sch) == 3.14
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.float(3.14)

assert sch == 3.14
```

```python
assert sch != 3.15  # incorrect value
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.float(3.14)

assert sch % 3.14 == schema.int(3.14)
```

```python
with assertRaises(SubstitutionError):
  sch % 3.15  # incorrect value
```

  </TabItem>

</Tabs>
