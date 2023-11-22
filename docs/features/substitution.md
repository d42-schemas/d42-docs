---
id: substitution
---
# Substitution

The `d42` package offers capabilities for substituting values in data structures based on defined schemas. This feature is designed to be simple and flexible, allowing for easy handling of complex data substitutions.

### Substituting Values

To substitute values, define a schema using `d42`, and then apply the `substitute` function with both the schema and the data as arguments.

Here's an example of substituting values in a list of user objects:

```python
from d42 import schema, substitute

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

This code substitutes values in a user list based on the defined `UserListSchema`, resulting in a `schema.list` containing `schema.dict` elements.

### Syntax Sugar

`d42` also introduces a more concise syntax for value substitution, using the `%` operator. This operator is similar to [printf-style string formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting) in Python, offering a familiar and readable way to substitute values.

Example using the `%` operator:

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

Using the `%` operator, values are substituted in the user list in a format reminiscent of printf-style string formatting, making the process both intuitive and efficient.
