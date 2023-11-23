---
id: numeric-custom-type
---

# Numeric Custom Type

```python
from typing import Any, Self

from d42.custom_type import CustomSchema, PathHolder, Props, ValidationResult, register_type
from d42.custom_type.errors import TypeValidationError, ValueValidationError
from d42.custom_type.utils import make_substitution_error
from d42.custom_type.visitors import Generator, Representor, Substitutor, Validator
from niltype import Nil, Nilable


class NumericProps(Props):
    @property
    def value(self) -> Nilable[str]:
        return self.get("value")


class NumericSchema(CustomSchema[NumericProps]):
    def __call__(self, value: str) -> Self:
        return self.__class__(self.props.update(value=value))

    def __represent__(self, visitor: Representor, indent: int = 0) -> str:
        if self.props.value is not Nil:
            return f"{visitor.name}.numeric({self.props.value!r})"
        return f"{visitor.name}.numeric"

    def __generate__(self, visitor: Generator) -> str:
        if self.props.value is not Nil:
            return self.props.value
        number = visitor.random.random_int(0, 2 ** 32 - 1)
        return str(number)

    def __validate__(self, visitor: Validator, value: Any, path: PathHolder) -> ValidationResult:
        result = visitor.make_validation_result()

        if not (isinstance(value, str) and all(char in "1234567890" for char in value)):
            result.add_error(TypeValidationError(path, value, "numeric str"))

        if (self.props.value is not Nil) and (value != self.props.value):
            result.add_error(ValueValidationError(path, value, self.props.value))

        return result

    def __substitute__(self, visitor: Substitutor, value: Any) -> Self:
        result = visitor.validator.visit(self, value=value)
        if result.has_errors():
            raise make_substitution_error(result, visitor.formatter)

        return self.__class__(self.props.update(value=value))


schema_numeric = register_type("numeric", NumericSchema)
```
