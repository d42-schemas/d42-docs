---
id: substitution
title: Substitution
slug: substitution
---
# Substitution

[revolt](https://pypi.org/project/revolt/) — value substitutor for schemas

#### Declare Schema

```python
from d42 import schema

UserSchema = schema.dict({
    "id": schema.int,
    "username": schema.str,
})

UserListSchema = schema.list(UserSchema)
```

#### Substitute Value

```python
from revolt import substitute

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

#### Syntax Sugar

Inspired by [str % operator](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)

```python
UserListSchema % [
    {"id": 1, "username": "Bob"},
    {"id": 2, "username": "Alice"}
]
```
