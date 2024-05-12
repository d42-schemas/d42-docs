---
id: vedro
title: vedro
slug: vedro
---
# vedro

The [vedro-valera-validator](https://pypi.org/project/vedro-valera-validator) package allows you to use [d42](https://pypi.org/project/d42/) as a validation tool for your [Vedro](https://pypi.org/project/vedro/) tests.

## Installation

### 1. Install package

To install the package, use the following command:

```shell
$ pip3 install vedro-valera-validator
```

### 2. Enable plugin

To enable the plugin, create a `vedro.cfg.py` file in the root of your project and add the following code:

```python
# ./vedro.cfg.py
import vedro
import vedro_valera_validator as valera_validator


class Config(vedro.Config):

    class Plugins(vedro.Config.Plugins):

        class ValeraValidator(valera_validator.ValeraValidator):
            enabled = True
```

## Usage

To use the `vedro-valera-validator` package, create a scenario file in the `./scenarios` directory of your project. In this scenario file, you can define the test scenario and its steps, as shown in the example below:

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

To run the tests, use the following command:

```shell
$ vedro run
```

This will run the tests and output the results. If the tests fail, a ValidationException will be raised, indicating which validation rule was not met. For example:

import TerminalOutput from '../../src/components/TerminalOutput';

<TerminalOutput>
{`
Scenarios
[1m* [0m[1m
[0m [31m✗ decode base64 encoded string[0m[31m
[0m   [32m✔ given[0m[32m
[0m   [32m✔ when[0m[32m
[0m   [31m✗ then[0m[31m
[0m[31m╭─[0m[31m─────────────────────[0m[31m [0m[1;31mTraceback [0m[1;2;31m(most recent call last)[0m[31m [0m[31m────────────────────[0m[31m─╮[0m
[31m│[0m [2;33m./scenarios/[0m[1;33mdecode_base64_encoded_string.py[0m:[94m19[0m in [92mthen[0m                       [31m│[0m
[31m│[0m                                                                              [31m│[0m
[31m│[0m   [2m16 [0m[2m│   │   [0m}                                                               [31m│[0m
[31m│[0m   [2m17 [0m[2m│   [0m                                                                    [31m│[0m
[31m│[0m   [2m18 [0m[2m│   [0m[94mdef[0m [92mthen[0m([96mself[0m):                                                     [31m│[0m
[31m│[0m [31m❱ [0m19 [2m│   │   [0m[94massert[0m [96mself[0m.result == schema.dict({                             [31m│[0m
[31m│[0m   [2m20 [0m[2m│   │   │   [0m[33m"[0m[33mresult[0m[33m"[0m: schema.bytes([33mb[0m[33m"[0m[33mbanana[0m[33m"[0m)                           [31m│[0m
[31m│[0m   [2m21 [0m[2m│   │   [0m})                                                              [31m│[0m
[31m│[0m   [2m22 [0m                                                                        [31m│[0m
[31m╰──────────────────────────────────────────────────────────────────────────────╯[0m
[1;91mValidationException: [0m
 - Value [1m<[0m[1;95mclass[0m[39m [0m[32m'bytes'[0m[1m>[0m at _[1m[[0m[32m'result'[0m[1m][0m must be equal to [32mb'banana'[0m, but [32mb'cucumber'[0m given
 
 
[38;5;249m# --seed 5ecd5919-ea2d-4a5c-b2d4-fc322167f2b4[0m[38;5;249m
[0m[1;31m# 3 scenarios, 0 passed, 1 failed, 2 skipped[0m[34m (0.21s)[0m[34m
[0m
`}
</TerminalOutput>

:::info

For more information about Vedro framework, see the [documentation](https://vedro.io/).

:::
