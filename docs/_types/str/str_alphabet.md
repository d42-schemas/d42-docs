import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema
from string import ascii_letters

sch = schema.str.alphabet(ascii_letters)
```

  </TabItem>

  <TabItem value="generate">

```python
from d42 import schema, fake
from string import ascii_letters

sch = schema.str.alphabet(ascii_letters)

assert all(x in ascii_letters for x in fake(sch))
```

  </TabItem>

  <TabItem value="validate">

```python
from d42 import schema
from string import ascii_letters

sch = schema.str.alphabet(ascii_letters)

assert sch == "banana"
```

```python
assert sch != "42"  # incorrect alphabet
```

  </TabItem>

  <TabItem value="substitute">

```python
from d42 import schema
from string import ascii_letters

sch = schema.str.alphabet(ascii_letters)

assert sch % "banana" == schema.str("banana").alphabet(ascii_letters)
```

```python
with assertRaises(SubstitutionError):
  sch % "42"  # incorrect alphabet
```

  </TabItem>

</Tabs>
