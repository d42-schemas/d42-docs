import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.bytes
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.bytes

assert isinstance(fake(sch), bytes)
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.bytes

assert sch == b"banana"
```

```python
assert sch != "banana"  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.bytes

assert sch % b"banana" == schema.bytes(b"banana")
```

```python
with assertRaises(SubstitutionError):
  sch % "banana"  # incorrect type
```

  </TabItem>

</Tabs>
