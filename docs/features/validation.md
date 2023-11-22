---
id: validation
---
# Validation

The `d42` package provides powerful features for validating data against defined schemas, ensuring data integrity and adherence to specified schema constraints.

### Validating Data

To perform validation, a schema must first be defined. Then, use the `validate_or_fail` function, supplying the schema and data as arguments.

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

This code validates a user against `UserSchema`. If the user data meets the schema's criteria, `validate_or_fail` returns True. Otherwise, it raises an exception indicating validation failure.

Here's an example of validation failing due to data not meeting the schema constraints:

```python
assert validate_or_fail(UserSchema, {
    "id": 0,
    "username": "",
    "is_deleted": False,
})

# ValidationException:
#   - Value <class 'int'> at _['id'] must be greater than or equal to 1, but 0 given
#   - Value <class 'str'> at _['username'] must have at least 1 element, but it has 0 elements
```

In this case, a `ValidationException` is raised, providing detailed error messages explaining why the validation failed.

:::info

For further exploration of `d42`'s capabilities and how they integrate with other tools, the [integrations chapter](/docs/integrations) provides a comprehensive overview of all available integrations.

:::
