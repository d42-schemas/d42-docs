import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.str
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.str

assert isinstance(fake(sch), str)
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.str

assert sch == "banana"
```

```python
assert sch != ["b", "a", "n", "a", "n", "a"]  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.str

assert sch % "banana" == schema.str("banana")
```

```python
with assertRaises(SubstitutionError):
  sch % ["b", "a", "n", "a", "n", "a"] # incorrect type
```

  </TabItem>

</Tabs>
