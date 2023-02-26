import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.str.contains("banana")
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.str.contains("banana")

assert "banana" in fake(sch)
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.str.contains("banana")

assert sch == "banana"
assert sch == "yellow banana"
```

```python
assert sch != ""  # must contain "banana"
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.str.contains("banana")

assert sch % "yellow banana" == schema.str("yellow banana").contains("banana")
```

```python
with assertRaises(SubstitutionError):
  sch % ""  # must contain "banana"
```

  </TabItem>

</Tabs>
