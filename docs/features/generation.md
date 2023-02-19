---
id: generation
title: Generation
slug: generation
---
# Generation

[blahblah](https://pypi.org/project/blahblah/) — fake data generator for schemas

#### Declare Schema

```python
from d42 import schema, validate_or_fail

UserSchema = schema.dict({
    "id": schema.int.min(1),
    "username": schema.str.len(1, 8),
    "is_deleted": schema.bool,
})
```

#### Generate Data

```python
user = fake(UserSchema)
print(user)

# {'id': 7207320, 'username': 'ANk', 'is_deleted': False}
```
