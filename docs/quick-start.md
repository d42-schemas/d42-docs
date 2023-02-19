---
id: quick-start
title: Quick Start
slug: quick-start
---
# Quick Start

[d42](https://pypi.org/project/d42/) package includes:
- [district42](https://pypi.org/project/district42/) — data description language for defining data models
- [blahblah](https://pypi.org/project/blahblah/) — fake data generator for district42 schema
- [valera](https://pypi.org/project/valera/) — validator for district42 schema
- [revolt](https://pypi.org/project/revolt/) — value substitutor for district42 schema

## Installation

```sh
pip3 install d42
```

## Usage

```python
from d42 import schema, fake, validate_or_fail

sch = schema.str("banana")

assert validate_or_fail(sch, fake(sch))
```
