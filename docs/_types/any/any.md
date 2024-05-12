import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema that defines any type.

```python
from d42 import schema

sch = schema.any
```

The `schema.any` object represents a schema that can match any type of value. This can be useful in some cases where the structure of the data is unknown or can vary widely.

  </TabItem>

  <TabItem value="generate">

Generates a random value of any type.

```python
from d42 import schema, fake

sch = schema.any

generated = fake(sch)
assert isinstance(generated, object)
```

:::note

In the current implementation, the `fake` function always returns `None`

:::

  </TabItem>

  <TabItem value="validate">

Validates any value. The `schema.any` object can match any value, so it will always return `True`.

```python
from d42 import schema

sch = schema.any

assert sch == None
assert sch == 42
assert sch == "banana"
```

  </TabItem>

  <TabItem value="substitute">

Substitutes a value of any type. The `schema.any` object can match any value, so it can substitute any value.

```python
from d42 import schema

sch = schema.any

assert sch % None == schema.any(schema.none)
assert sch % 42 == schema.any(schema.int(42))
assert sch % "banana" == schema.any(schema.str("banana"))
```

:::note

The [from_native](/docs/features/declaration#creating-schemas-from-native-types) function is used to convert the Python objects to d42 types.

:::

  </TabItem>

</Tabs>
