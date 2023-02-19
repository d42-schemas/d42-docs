import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.bool(True)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.bool(True)

assert fake(sch) is True
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.bool(True)

assert sch == True
```

```python
assert sch != False  # incorrect value
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.bool(True)

assert sch % True == schema.bool(True)
```

```python
with assertRaises(SubstitutionError):
  sch % False  # incorrect value
```

  </TabItem>

</Tabs>
