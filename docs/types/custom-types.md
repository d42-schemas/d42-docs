---
id: custom-types
title: Custom Types
slug: custom-types
---

# Custom Types

Working with domain-specific data often requires extending beyond standard types. The d42 package provides an easy way to define custom types.

Consider an application that needs handle numeric strings, such as "1234". A unique type is required to ensure that these strings contain only numeric characters.

## Step 1: Define the Basic Custom Type

First, define the `NumericSchema` type:

```python
from d42.custom_type import CustomSchema, Props

class NumericSchema(CustomSchema[Props]):
    pass
```

Here, the generic parameter `PropsType` for `CustomSchema` holds the properties for custom types. Our numeric type doesn't need special properties, so we'll use the default `Props`.

Next, proceed to register the custom type:

```python
from d42.custom_type import register_type

schema_numeric = register_type("numeric", NumericSchema)
```

Now, the custom type is ready for use:

```python
print(schema_numeric)  # <NumericSchema>
```

This is a solid start, but it remains quite basic.

## Step 2: Enhance Your Custom Type

The d42 package provides options for enriching your custom type with additional functionalities.

### A. Improve the Representation

Make your type fit better with other types like `schema.str` and `schema.int`.

```python
from d42.custom_type.visitors import Representor

class NumericSchema(CustomSchema[Props]):
    def __represent__(self, visitor: Representor, indent: int = 0) -> str:
        return "schema.numeric"
```

Now, it'll look like this:

```python
print(schema_numeric)  # schema.numeric
```

### B. Add Random Generation

You can generate random instances:

```python
from d42.custom_type.visitors import Generator
from random import randint

class NumericSchema(CustomSchema[Props]):
    ...

    def __generate__(self, visitor: Generator) -> str:
        number = randint(0, 2147483647)  # int32 max
        return str(number)
```

Test random number generation:

```python
from d42 import fake
for _ in range(3):
    print(fake(schema_numeric))
# Outputs might be:
# 1613861680
# 608712493
# 1535820500
```

### C. Implement Validation

Data validation is crucial when working with custom types. This ensures that the data aligns with your specifications.

```python
from typing import Any
from d42.custom_type import PathHolder, ValidationResult
from d42.custom_type.errors import TypeValidationError
from d42.custom_type.visitors import Validator

class NumericSchema(CustomSchema[Props]):
    ...

    def __validate__(self, visitor: Validator, value: Any, path: PathHolder) -> ValidationResult:
        result = visitor.make_validation_result()

        if not (isinstance(value, str) and all(x in "1234567890" for x in value)):
            result.add_error(TypeValidationError(path, value, "numeric str"))

        return result
```

Now, you have the ability to perform value validation:

```python
from d42 import validate_or_fail
print(validate_or_fail(schema_numeric, "1234"))  # True

print(validate_or_fail(schema_numeric, "abcd"))
# Outputs:
# valera.ValidationException:
# - Value 'abcd' must be numeric str, but <class 'str'> given
```

By following the steps above, you can create a robust custom type tailored to your specific needs.

:::tip
Full code is available [here](./numeric-custom-type.md)
:::
