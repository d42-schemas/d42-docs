import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.none
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake

sch = schema.none

assert fake(sch) is None
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.none

assert sch == None
```

```python
assert sch != False  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

sch = schema.none

assert sch % None == schema.none
```

```python
with assertRaises(SubstitutionError):
  sch % 0  # incorrect type
```

  </TabItem>

</Tabs>
