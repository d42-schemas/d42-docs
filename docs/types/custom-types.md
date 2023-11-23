---
id: custom-types
---

# Custom Types: Foundations

Working with domain-specific data often requires extending beyond standard types. The [d42](https://pypi.org/project/d42/) package provides an easy way to define custom types.

Consider an application that needs handle numeric strings, such as `"1234"`. A unique type is required to ensure that these strings contain only numeric characters.

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
print(schema_numeric)
# Output:
# <NumericSchema>
```

This is a solid start, but it remains quite basic.

## Step 2: Enhance the Custom Type

The d42 package provides options for enriching a custom type with additional functionalities.

### A. Improve the Representation

The special `__represent__` method is called when `repr(schema)` is used, providing a custom string representation of the schema.

```python
from d42.custom_type.visitors import Representor

class NumericSchema(CustomSchema[Props]):
    def __represent__(self, visitor: Representor, indent: int = 0) -> str:
        return "schema.numeric"
```

Now, it'll look like this:

```python
print(schema_numeric) 
# Output:
# schema.numeric
```

### B. Add Random Generation

The special `__generate__` method is invoked for creating random instances of the custom type.

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

The `__validate__` method is used to ensure that values conform to the custom type's specifications.

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

Now, it's possible to perform value validation:

```python
from d42 import validate_or_fail
print(validate_or_fail(schema_numeric, "1234"))
# Output:
# True

print(validate_or_fail(schema_numeric, "abcd"))
# Output:
# valera.ValidationException:
# - Value 'abcd' must be numeric str, but <class 'str'> given
```

## Next Steps

In the [next article](/docs/types/custom-types-value-substitution), the focus will be on value substitution for custom types, enhancing their functionality and usability in various scenarios.
