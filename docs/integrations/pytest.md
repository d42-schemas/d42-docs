---
id: pytest
title: pytest
slug: pytest
---
# pytest

## Installation

### 1. Install package

```shell
pip3 install d42
```

### 2. Register hook

```python
# ./conftest.py
from district42.types import Schema
from valera import Formatter, validate


def pytest_assertrepr_compare(op, left, right):
    if isinstance(right, Schema):
        result = validate(right, left)
        formatter = Formatter()
        errors = ["- " + e.format(formatter) for e in result.get_errors()]
        return ["valera.ValidationException"] + errors
```

## Usage

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

### Run tests

```shell
$ pytest tests/
```

```shell
E    AssertionError: assert valera.ValidationException
E      - Value <class 'bytes'> at _['result'] must be equal to b'banana', but b'cucumber' given
```
