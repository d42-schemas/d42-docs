---
id: declaration
title: Declaration
slug: declaration
---
# Declaration

[district42](https://pypi.org/project/district42/) is a data description language for defining data models. It provides a simple and expressive way to define the structure and constraints of your data.

### Defining Schemas

The `district42` package provides a variety of built-in data types, including booleans, integers and strings, as well as more complex data types like lists and dictionaries.

Here's an example of defining a simple schema using `district42`:

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

This defines a schema for a user with an integer `id` greater than or equal to 1, a string `username` with length between 1 and 8 characters, and a boolean `is_deleted`.

:::info

The [types chapter](/docs/types) contains a list of all available data types

:::

### Creating Schemas from Native Types

The `district42` package provides a way to create a schema from a native Python object. This can be useful for creating schemas on the fly based on existing data.

Here's an example of creating a schema from a native Python object using `district42`:

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

This creates a schema based on the structure and data types of the native Python object.
