---
id: custom-types
title: Custom Types — Basics
slug: custom-types
---
# Custom Types

## 1. Declare

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="typed">

<TabItem value="untyped" label="plain" default>

```python
from district42 import Props
from district42.types import Schema

class BananaSchema(Schema[Props]):
    def __accept__(self, visitor, **kwargs):
        return visitor.visit_banana(self, **kwargs)
```

</TabItem>

<TabItem value="typed" label="typed">

```python
from typing import Any
from district42 import Props, SchemaVisitor, SchemaVisitorReturnType as ReturnType
from district42.types import Schema

class BananaSchema(Schema[Props]):
    def __accept__(self, visitor: SchemaVisitor[ReturnType], **kwargs: Any) -> ReturnType:
        return visitor.visit_banana(self, **kwargs)
```

</TabItem>

</Tabs>

## 2. Register

```python
from district42 import register_type

register_type("banana", BananaSchema)
```

## 3. Use

```python
from district42 import schema

assert isinstance(schema.banana, BananaSchema)
```
