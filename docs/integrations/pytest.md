---
id: pytest
title: pytest
slug: pytest
---
# pytest

You can use [d42](https://pypi.org/project/d42/) ([valera](https://pypi.org/project/valera/)) as a validation tool for your [pytest](https://pypi.org/project/pytest/) tests.

## Installation

To install the package, use the following command:

```shell
$ pip3 install d42
```

## Usage

To use [d42](https://pypi.org/project/d42/) with [pytest](https://pypi.org/project/pytest/), you need to define a custom assertion message that uses the `validate` function from the [valera](https://pypi.org/project/valera/) package to validate the test result against the schema. To do this, create a `conftest.py` file in the root of your project and add the following code:

```python
# ./conftest.py
from district42.types import Schema
from valera import format_result, validate


def pytest_assertrepr_compare(op, left, right):
    if isinstance(right, Schema):
        result = validate(right, left)
        return format_result(result)
```

Next, in your test file, define the test scenario and its steps, as shown in the example below:

```python
from base64 import b64decode
from d42 import schema


def test_b64decode():
    encoded = "Y3VjdW1iZXI="

    result = {
        "result": b64decode(encoded)
    }

    assert result == schema.dict({
        "result": schema.bytes(b"banana")
    })
```

In this example, the test scenario decodes a base64 encoded string and validates that the result matches the expected output defined in the schema.

### Run tests

To run the tests, use the following command:

```shell
$ pytest tests/
```

If the tests fail, a `ValidationException` will be raised, indicating which validation rule was not met. For example:

```shell
E    AssertionError: assert valera.ValidationException
E      - Value <class 'bytes'> at _['result'] must be equal to b'banana', but b'cucumber' given
```
