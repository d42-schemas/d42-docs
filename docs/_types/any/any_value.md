import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema that can be any of the provided types.

```python
from d42 import schema

sch = schema.any(schema.str, schema.int)

# syntax sugar
sch = schema.str | schema.int
```

Both of the above examples define a schema that can be either a `str` or an `int`.

  </TabItem>

  <TabItem value="generate">

Generates a random value, limited to the provided types.

```python
from d42 import schema, fake

sch = schema.any(schema.str, schema.int)

generated = fake(sch)
assert isinstance(generated, (str, int))
```

  </TabItem>

  <TabItem value="validate">

Validates the value against all the provided types, returning `True` if any of them match the value.

```python
from d42 import schema

sch = schema.any(schema.str, schema.int)

assert sch == "42"
assert sch == 42
```

```python
assert sch != None  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

Substitutes the value into all the provided types where the validation has passed.

```python
from d42 import schema

sch = schema.any(schema.str, schema.int)

assert sch % "42" == schema.any(schema.str("42"))
assert sch % 42 == schema.any(schema.int(42))
```

```python
with assertRaises(SubstitutionError):
  sch % None  # incorrect type
```

:::note

If the value matches multiple types, the substitution will be performed for all of them. If the value doesn't match any of the provided types, a `SubstitutionError` will be raised.

:::

  </TabItem>

</Tabs>
