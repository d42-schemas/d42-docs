import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema for a list. The constructor takes a schema object representing the type of the list elements.

```python
from d42 import schema

sch = schema.list(schema.int)
```

  </TabItem>

  <TabItem value="generate">

Generates a random list of values conforming to the schema.

```python
from d42 import schema, fake

sch = schema.list(schema.int)

generated = fake(sch)
assert isinstance(generated, list)
assert all(isinstance(x, int) for x in generated)
```

  </TabItem>

  <TabItem value="validate">

Validates the value against the schema, returning True if all the elements in the list match the schema.

```python
from d42 import schema

sch = schema.list(schema.int)

assert sch == []
assert sch == [1, 2, 3]
```

```python
assert sch != ["42"]  # invalid type
```

  </TabItem>

  <TabItem value="substitute">

Substitutes a list value into a new list where each value is replaced with its corresponding schema. If the value doesn't match the provided schema, a `SubstitutionError` will be raised.

```python
from d42 import schema

sch = schema.list(schema.int)

assert sch % [] == schema.list([])
assert sch % [1, 2] == schema.list([schema.int(1), schema.int(2)])
```

```python
with assertRaises(SubstitutionError):
  sch % ["42"]  # invalid type
```

  </TabItem>

</Tabs>
