---
id: declaration
title: Declaration
slug: declaration
---
# Declaration

[district42](https://pypi.org/project/district42/) — data description language for defining data models

#### Declare Schema

```python
from d42 import schema, validate_or_fail

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

#### Cut the Corner

Create schema from native Python types:

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
