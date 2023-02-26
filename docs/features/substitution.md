---
id: substitution
title: Substitution
slug: substitution
---
# Substitution

[revolt](https://pypi.org/project/revolt/) is a package for substituting values based on district42 schemas. It provides a simple and flexible way to substitute values in complex data structures.

### Substituting Values

To substitute values, you need to define a schema using district42 and then call the `substitute` function from the `revolt` package with the schema and data as arguments.

Here's an example of substituting values for a list of user objects:

```python
from d42 import schema
from revolt import substitute

UserSchema = schema.dict({
    "id": schema.int,
    "username": schema.str,
})
UserListSchema = schema.list(UserSchema)

substituted = substitute(UserListSchema, [
    {"id": 1, "username": "Bob"},
    {"id": 2, "username": "Alice"}
])

print(substituted)

# schema.list([
#     schema.dict({
#         'id': schema.int(1),
#         'username': schema.str('Bob')
#     }),
#     schema.dict({
#         'id': schema.int(2),
#         'username': schema.str('Alice')
#     })
# ])
```

This will substitute the values in the list of user objects based on the constraints defined in the UserListSchema. The resulting data structure will be a schema.list with schema.dict elements.

### Syntax Sugar

In addition to the `substitute` function, `revolt` provides a more concise syntax for substituting values using the `%` operator.

Here's an example of substituting values using the `%` operator:

```python
from d42 import schema

UserSchema = schema.dict({
    "id": schema.int,
    "username": schema.str,
})
UserListSchema = schema.list(UserSchema)

UserListSchema % [
    {"id": 1, "username": "Bob"},
    {"id": 2, "username": "Alice"}
]
```

This will substitute the values in the list of user objects using the `%` operator, which is similar to the [printf style string formatting in Python](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting).
