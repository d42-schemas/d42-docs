---
id: declaration
---
# Declaration

The `d42` package offers a data description language for defining data models. It provides a simple yet expressive way to outline the structure and constraints of data.

### Defining Schemas

`d42` includes a variety of built-in data types, such as booleans, integers, strings, and more complex types like lists and dictionaries.

Here's an example of defining a simple schema using `d42`:

```python
from d42 import schema

UserSchema = schema.dict({
    "id": schema.int.min(1),
    "username": schema.str.len(1, 8),
    "is_deleted": schema.bool,
})

print(UserSchema)

# schema.dict({
#     'id': schema.int.min(1),
#     'username': schema.str.len(1, 8),
#     'is_deleted': schema.bool
# })
```

This example demonstrates defining a user schema with an integer `id` (minimum value 1), a string `username` (length between 1 and 8 characters), and a boolean `is_deleted`.

:::info

A comprehensive list of all available data types is provided in the [types chapter](/docs/types).

:::

### Creating Schemas from Native Types

`d42` also enables the creation of schemas directly from native Python objects. This is particularly useful for quickly creating schemas based on existing data structures.

For instance:

```python
from d42 import from_native

data = {
    "id": 1,
    "username": "Bob",
    "is_deleted": False,
}

schema = from_native(data)
print(schema)

# schema.dict({
#     'id': schema.int(1),
#     'username': schema.str('Bob'),
#     'is_deleted': schema.bool(False)
# })
```

This code snippet shows how to create a schema mirroring the structure and data types of a native Python object.
