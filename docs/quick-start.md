---
id: quick-start
title: Quick Start
slug: quick-start
---
# Quick Start

The d42 package provides several tools for defining, generating, validating, and substituting data based on data models defined using the district42 data description language.

## Installation

```shell
$ pip3 install d42
```

## Components

The [d42](https://pypi.org/project/d42/) package includes the following components:
- [district42](https://pypi.org/project/district42/) — data description language for defining data models
- [blahblah](https://pypi.org/project/blahblah/) — fake data generator for district42 schema
- [valera](https://pypi.org/project/valera/) — validator for district42 schema
- [revolt](https://pypi.org/project/revolt/) — value substitutor for district42 schema

## Usage

Here's an example of declaring a schema for a string containing the word "banana":

```python
from d42 import schema, fake, validate_or_fail

sch = schema.str("banana")

assert validate_or_fail(sch, fake(sch))
```

In this example, we declare a schema using the `schema.str` function with the string "banana" as an argument. We then use the `fake` function to generate a fake value based on the schema, and the `validate_or_fail` function to ensure that the generated value meets the requirements of the schema. The `assert` statement checks that the validation is successful, and raises an exception if it fails.
