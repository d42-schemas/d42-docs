import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema for a list.

```python
from d42 import schema

sch = schema.list
```

  </TabItem>

  <TabItem value="generate">

Generates a random list.

```python
from d42 import schema, fake

sch = schema.list

generated = fake(sch)
assert isinstance(generated, list)
```

:::note

In the current implementation, the `fake` function always returns `[]`

:::

  </TabItem>

  <TabItem value="validate">

Validates the value against the list schema. If the type is correct, the `schema.list` object can match any list and will always return `True`.

```python
from d42 import schema

sch = schema.list

assert sch == []
assert sch == [1, 2, 3]
```

  </TabItem>

  <TabItem value="substitute">

Substitutes the value into the list schema if the validation has passed.

```python
from d42 import schema

sch = schema.list

assert sch % [] == schema.list([])
assert sch % [1, 2] == schema.list([schema.int(1), schema.int(2)])
```

:::note

The [from_native](/docs/features/declaration#creating-schemas-from-native-types) function is used to convert the Python objects to d42 types.

:::

  </TabItem>

</Tabs>
