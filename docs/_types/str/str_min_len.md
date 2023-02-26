import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.str.len(3, ...)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.str.len(3, ...)

assert len(fake(sch)) >= 3
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.str.len(3, ...)

assert sch == "abc"
assert sch == "abcd"
```

```python
assert sch != "ab"  # incorrect length
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.str.len(3, ...)

assert sch % "abc" == schema.str("abc").len(3, ...)
assert sch % "abcd" == schema.str("abcd").len(3, ...)
```

```python
with assertRaises(SubstitutionError):
  sch % "ab"  # incorrect length
```

  </TabItem>

</Tabs>
