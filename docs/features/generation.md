---
id: generation
title: Generation
slug: generation
---
# Generation

[blahblah](https://pypi.org/project/blahblah/) is a package for generating fake data based on district42`schemas. It provides a simple and flexible way to generate test data for your applications.

### Generating Fake Data

To generate fake data, you need to define a schema using district42 and then call the `fake` function with the schema as an argument.

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

This will generate a fake user object with an integer `id`, a string `username`, and a boolean `is_deleted`. The values will be generated randomly within the constraints defined by the schema.
