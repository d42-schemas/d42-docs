import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="declare">
  <TabItem value="declare">

Declares a schema for a dictionary. The contstructor takes a dictionary of key-value pairs, where the keys are strings representing the dictionary keys, and the values are schema objects representing the value types.

```python
from d42 import schema

sch = schema.dict({
    "id": schema.int.min(1),
    "name": schema.str.len(1, ...)
})
```

By default, only the keys specified in the dictionary are allowed in the dictionary. To allow other keys, use the ... syntax:

```python
from d42 import schema

sch = schema.dict({
    "id": schema.int.min(1),
    "name": schema.str.len(1, ...),
    ...: ...
})
```

  </TabItem>

  <TabItem value="generate">

Generates a random dictionary that satisfies the schema.

```python
from d42 import schema, fake

sch = schema.dict({
    "id": schema.int.min(1),
    "name": schema.str.len(1, ...)
})

generated = fake(sch)
assert isinstance(generated, dict)
assert isinstance(generated["id"], int) and generated["id"] >= 1
assert isinstance(generated["id"], str) and len(generated["name"]) >= 1
```

  </TabItem>

  <TabItem value="validate">

Validates a dictionary against a schema object.

```python
from d42 import schema

sch = schema.dict({
    "id": schema.int.min(1),
    "name": schema.str.len(1, ...)
})

assert sch == {"id": 1, "name": "Bob"}
assert sch == {"id": 2, "name": "Alice"}
```

```python
assert sch != {"id": 0, "name": "Bob"}                       # incorrect `id` value
assert sch != {"id": 1}                                      # missing `name` key
assert sch != {"id": 1, "name": "Bob", "is_deleted": False}  # extra `is_deleted` key
```

  </TabItem>

  <TabItem value="substitute">

Substitutes the values of a dictionary with the corresponding schema object.

```python
from d42 import schema

sch = schema.dict({
    "id": schema.int.min(1),
    "name": schema.str.len(1, ...)
})

assert sch % {"id": 1, "name": "Bob"} == schema.dict({
    "id": schema.int(1).min(1),
    "name": schema.str("Bob").len(1, ...)
})
```

  </TabItem>

</Tabs>
