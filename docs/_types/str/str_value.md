import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.str("banana")
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.str("banana")

assert fake(sch) == "banana"
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.str("banana")

assert sch == "banana"
```

```python
assert sch != "cucumber"  # incorrect value
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.str("banana")

assert sch % "banana" == schema.str("banana")
```

```python
with assertRaises(SubstitutionError):
  sch % "cucumber"  # incorrect value
```

  </TabItem>

</Tabs>
