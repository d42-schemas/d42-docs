import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.str.len(2, 3)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.str.len(2, 3)

assert 2 <= len(fake(sch)) <= 3
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.str.len(2, 3)

assert sch == "ab"
assert sch == "abc"
```

```python
assert sch != "a"  # incorrect length
assert sch != "abcd"  # incorrect length
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.str.len(2, 3)

assert sch % "ab" == schema.str("ab").len(2, 3)
assert sch % "abc" == schema.str("abc").len(2, 3)
```

```python
with assertRaises(SubstitutionError):
  sch % "a"  # incorrect length
```

  </TabItem>

</Tabs>
