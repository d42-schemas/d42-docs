---
id: value-substitution
---

# Custom Types: Value Substitution

This article is a sequel to the [previous article](/docs/types/custom-types/foundations) and focuses on implementing value substitution for custom types.

### Step 1. Enhance Definitions

First, enhance the `NumericProps` class by adding a `value` property. This property will hold the value of the numeric type.

```python
from niltype import Nilable
from d42.custom_type import Props

class NumericProps(Props):
    # highlight-start
    @property
    def value(self) -> Nilable[str]:
        return self.get("value")
    # highlight-end
```

Then, implement the `__call__` method in `NumericSchema`. This method enables declaring a schema with a value, like `schema_numeric("42")`.

```python
from typing import Self
from d42.custom_type import CustomSchema, Props

class NumericSchema(CustomSchema[NumericProps]):
    # highlight-start
    def __call__(self, value: str) -> Self:
        return self.__class__(self.props.update(value=value))
    # highlight-end
```

### Step 2. Refine Type Representation

Modify the `__represent__` method in `NumericSchema` to include the numeric value in its representation.

```python
from niltype import Nil
from d42.custom_type.visitors import Representor

class NumericSchema(CustomSchema[NumericProps]):
    ...

    def __represent__(self, visitor: Representor, indent: int = 0) -> str:
        # highlight-start
        if self.props.value is not Nil:
            return f"{visitor.name}.numeric({self.props.value!r})"
        # highlight-end
        return f"{visitor.name}.numeric"
```

```python
print(schema_numeric("1234"))
# Output:
# schema.numeric('1234')
```

### Step 3. Fine-Tune Type Generation

Adjust the `__generate__` method in `NumericSchema` to account for a predefined value. If a value is already specified, it returns this value instead of generating a new one.

```python
from random import randint
from niltype import Nil
from d42.custom_type.visitors import Generator

class NumericSchema(CustomSchema[NumericProps]):
    ...

    def __generate__(self, visitor: Generator) -> str:
        # highlight-start
        if self.props.value is not Nil:
            return self.props.value
        # highlight-end
        number = randint(0, 2147483647)  # int32 max
        return str(number)
```

```python
from d42 import fake
sch = schema_numeric("1234")
print(fake(sch))

# Output:
# 1234
```

### Step 4. Implement Value Validation

Enhance the `__validate__` method to include an additional check. If a specific value is set in the schema's properties, it validates that the incoming value matches this set value.

```python
from typing import Any
from niltype import Nil
from d42.custom_type.visitors import Validator
from d42.custom_type import PathHolder, ValidationResult
from d42.custom_type.errors import TypeValidationError, ValueValidationError

class NumericSchema(CustomSchema[NumericProps]):
    def __validate__(self, visitor: Validator, value: Any, path: PathHolder) -> ValidationResult:
        result = visitor.make_validation_result()

        if not (isinstance(value, str) and all(char in "1234567890" for char in value)):
            result.add_error(TypeValidationError(path, value, "numeric str"))

        # highlight-start
        if (self.props.value is not Nil) and (value != self.props.value):
            result.add_error(ValueValidationError(path, value, self.props.value))
        # highlight-end

        return result
```

```python
from d42 import validate_or_fail
sch = schema_numeric("1234")

print(validate_or_fail(sch, "1234"))
# Output:
# True

print(validate_or_fail(sch, "5678"))
# Output:
# d42.ValidationException:
# - Value <class 'str'> must be equal to '1234', but '5678' given
```

### Step 5. Add Value Substitution

The `__substitute__` method is used for value substitution in custom types. It first validates the incoming value and, if valid, updates the properties with this new value.


Unlike other features such as representation, generation, and validation, which can be implemented independently and as needed, value substitution based on validation. So first need to validate incoming value and then update props.

```python
from typing import Any, Self
from d42.custom_type.visitors import Substitutor
from d42.custom_type.utils import make_substitution_error

class NumericSchema(CustomSchema[NumericProps]):
    ...

    def __substitute__(self, visitor: Substitutor, value: Any) -> Self:
        result = visitor.validator.visit(self, value=value)
        if result.has_errors():
            raise make_substitution_error(result, visitor.formatter)

        return self.__class__(self.props.update(value=value))
```

```python
print(schema_numeric % "1234")
# Output
# schema.numeric("1234")

print(schema_numeric("1234") % "5678")
# Output:
# d42.substitution.errors.SubstitutionError:
# - Value <class 'str'> must be equal to '1234', but '5678' given
```

:::tip

For the complete code snippet of this implementation, please refer to [this page](/docs/types/numeric-custom-type)

:::
