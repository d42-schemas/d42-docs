---
id: validation
title: Validation
slug: validation
---
# Validation

[valera](https://pypi.org/project/valera/) is a package for validating data based on district42 schemas. It provides a simple and flexible way to validate data against a schema.

#### Validating Data

To validate data, you need to define a schema using district42 and then call the `validate_or_fail` function with the schema and data as arguments.

```python
from d42 import schema, validate_or_fail

UserSchema = schema.dict({
    "id": schema.int.min(1),
    "username": schema.str.len(1, 8),
    "is_deleted": schema.bool,
})

assert validate_or_fail(UserSchema, {
    "id": 1,
    "username": "Bob",
    "is_deleted": False,
})
```

This will validate the user against the `UserSchema`. If the validation passes, `validate_or_fail` will return True. If the validation fails, `validate_or_fail` will raise a `valera.ValidationException`.

Here's an example of validating data that does not meet the constraints of the schema:

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

This will raise a `valera.ValidationException` with detailed error messages explaining why the validation failed.

:::info

The [integrations chapter](/docs/integrations) contains a list of all available integrations

:::
