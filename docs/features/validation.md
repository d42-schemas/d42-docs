---
id: validation
title: Validation
slug: validation
---
# Validation

[valera](https://pypi.org/project/valera/) — validator for schemas

#### Declare Schema

```python
from d42 import schema, validate_or_fail

UserSchema = schema.dict({
    "id": schema.int.min(1),
    "username": schema.str.len(1, 8),
    "is_deleted": schema.bool,
})
```

#### Validate Data

```python
assert validate_or_fail(UserSchema, {
    "id": 1,
    "username": "Bob",
    "is_deleted": False,
})
```

`validate_or_fail` returns `True` or raises `valera.ValidationException`

```python
assert validate_or_fail(UserSchema, {
    "id": 0,
    "username": "",
    "is_deleted": False,
})

# valera.ValidationException:
#   - Value <class 'int'> at _['id'] must be greater than or equal to 1, but 0 given
#   - Value <class 'str'> at _['username'] must have at least 1 element, but it has 0 elements
```
