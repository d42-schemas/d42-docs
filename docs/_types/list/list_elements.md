import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema for a list of values that conform to the specified schema.

```python
from d42 import schema

sch = schema.list([schema.int, schema.int])
```

  </TabItem>

  <TabItem value="generate">

Generates a random list of values that conform to the specified schema.

```python
from d42 import schema, fake

sch = schema.list([schema.int, schema.int])

generated = fake(sch)
assert isinstance(generated, list)
assert isinstance(generated[0], int)
assert isinstance(generated[1], int)
```

  </TabItem>

  <TabItem value="validate">

Validates the value against the schema.

```python
from d42 import schema

sch = schema.list([schema.int, schema.int])

assert sch == [1, 2]
```

```python
assert sch != [1, 2, 3]  # invalid length
```

  </TabItem>

  <TabItem value="substitute">

Substitutes the value into the schema where validation has passed. If the value doesn't conform to the schema, a `SubstitutionError` will be raised.

```python
from d42 import schema

sch = schema.list([schema.int, schema.int])

assert sch % [1, 2] == schema.list([schema.int(1), schema.int(2)])
```

```python
with assertRaises(SubstitutionError):
  sch % ["1", "2"]  # invalid type
```

  </TabItem>

</Tabs>
