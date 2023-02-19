---
id: vedro
title: vedro
slug: vedro
---
# vedro

## Installation

### 1. Install package

```shell
$ pip3 install vedro-valera-validator
```

### 2. Enable plugin

```python
# ./vedro.cfg.py
import vedro
import vedro_valera_validator as valera_validator


class Config(vedro.Config):

    class Plugins(vedro.Config.Plugins):

        class ValeraValidator(valera_validator.ValeraValidator):
            enabled = True
```

Documentation — https://pypi.org/project/vedro-valera-validator

## Usage

```python
# ./scenarios/decode_base64_encoded_string.py
import vedro
from base64 import b64decode
from d42 import schema


class Scenario(vedro.Scenario):
    subject = "decode base64 encoded string"

    def given(self):
        self.encoded = "Y3VjdW1iZXI="

    def when(self):
        self.result = {
            "result": b64decode(self.encoded)
        }

    def then(self):
        assert self.result == schema.dict({
            "result": schema.bytes(b"banana")
        })
```

### Run tests

```shell
$ vedro run -vv
```

```shell
ValidationException:
 - Value <class 'bytes'> at _['result'] must be equal to b'banana', but b'cucumber' given
 ```
