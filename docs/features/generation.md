---
id: generation
---
# Generation

The `d42` package includes tools for generating fake data based on defined data schemas, offering a straightforward and flexible approach for creating test data for applications.

### Generating Fake Data

To generate fake data, a schema is first defined using the data modeling capabilities of `d42`, followed by calling the `fake` function with the defined schema.

```python
from d42 import schema, fake

UserSchema = schema.dict({
    "id": schema.int.min(1),
    "username": schema.str.len(1, 8),
    "is_deleted": schema.bool,
})

user = fake(UserSchema)
print(user)

# {'id': 7207320, 'username': 'ANk', 'is_deleted': False}
```

In this example, fake user data is generated, including an integer `id`, a string `username`, and a boolean `is_deleted`. The values are generated randomly, adhering to the constraints set by the schema.
