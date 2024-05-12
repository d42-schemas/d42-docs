import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema that can be any dict.

```python
from d42 import schema

sch = schema.dict
```

  </TabItem>

  <TabItem value="generate">

Generates a random dict.

```python
from d42 import schema

sch = schema.dict

generated = fake(sch)
assert isinstance(generated, dict)
```

:::note

In the current implementation, the `fake` function always returns `{}`

:::

  </TabItem>

  <TabItem value="validate">

Validates the value against the dict schema. If the type is correct, the `schema.dict` object can match any dictionary and will always return `True`.

```python
from d42 import schema

sch = schema.dict

assert sh == {}
assert sh == {"id": 1}
```

```python
assert sh != []  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

Substitutes the value into the dict schema if the validation has passed.

```python
from d42 import schema

sch = schema.dict

assert sch % {} == schema.dict({})
assert sch % {"id": 1} == schema.dict({"id": schema.int(1)})
```

:::note

The [from_native](/docs/features/declaration#creating-schemas-from-native-types) function is used to convert the Python objects to d42 types.

:::

  </TabItem>

</Tabs>
