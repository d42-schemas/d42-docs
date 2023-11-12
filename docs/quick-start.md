---
id: quick-start
slug: quick-start
---
# Quick Start

The `d42` package is a comprehensive toolkit for data modeling, which includes functionalities for definition, generation, validation, and substitution of data models using a robust data description language.

## Installation

```shell
$ pip3 install d42
```

## Components

`d42` offers a full suite of tools essential for effective data modeling:
- A data description language for defining data models.
- Integrated capabilities for generating fake data.
- Built-in validation tools for ensuring data model integrity.
- Utilities for substituting values in data models.

## Usage

Here is an example of how to declare a schema for a string containing the word "banana":

```python
from d42 import schema, fake, validate_or_fail

sch = schema.str("banana")

assert validate_or_fail(sch, fake(sch))
```

In this example, a schema is declared using the `schema.str` function with "banana" as an argument. A fake value based on this schema is then generated using the `fake` function, and its validity is checked with `validate_or_fail`. The `assert` statement confirms the success of the validation, raising an exception if it fails.
