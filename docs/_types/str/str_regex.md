import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.str.regex(r"^[0-9]{4}$")
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake
import re

sch = schema.str.regex(r"^[0-9]{4}$")

assert re.match(r"^[0-9]{4}$", fake(sch))
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema

sch = schema.str.regex(r"^[0-9]{4}$")

assert sch == "1234"
```

```python
assert sch != "abc"  # must match regex
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema

ssch = schema.str.regex(r"^[0-9]{4}$")

assert sch % "1234" == schema.str("1234").regex("^[0-9]{4}$")
```

```python
with assertRaises(SubstitutionError):
  sch % "abc"  # must match regex
```

  </TabItem>

</Tabs>
