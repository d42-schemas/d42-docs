---
id: type-aliases
---
# Type Aliases

Type Aliases are a way to define custom schema types using existing schema objects. They allow you to define complex schema objects that are used multiple times in your code by assigning them to a variable.

To create a Type Alias, use the `schema.alias` constructor and provide a name and a schema object as arguments. The constructor returns a new schema object that can be used as a type in your code.

```python
from d42 import schema

CitySchema = schema.alias("CitySchema", schema.dict({
    "id": schema.int.min(1),
    "name": schema.str,
}))

UserSchema = schema.alias("UserSchema", schema.dict({
    "id": schema.int.min(1),
    "name": schema.str,
    "city": CitySchema,
}))
```

:::note

Specifying an alias only affects the object representation

:::

```python
print(UserSchema)

UserSchema<schema.dict({
    'id': schema.int.min(1),
    'name': schema.str,
    'city': CitySchema<schema.dict({
        'id': schema.int.min(1),
        'name': schema.str
    })>
})>
```

Using Type Aliases can make your code more readable and maintainable by abstracting complex schema definitions into reusable types.
