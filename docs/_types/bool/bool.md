import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.bool
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.bool

assert fake(sch) in (True, False)
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.bool

assert sch == True
assert sch == False
```

```python
assert sch != None  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.bool

assert sch % True == schema.bool(True)
```

```python
with assertRaises(SubstitutionError):
  sch % 1  # incorrect type
```

  </TabItem>

</Tabs>
