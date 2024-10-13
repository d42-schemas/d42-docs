# Migration (v1 to v2)

Version 2 of `d42` introduces key technical improvements aimed at simplifying the experience for users of the package and enhancing the contribution process for developers involved in `d42` development. Below are the most important breaking changes and instructions on how to adapt your project accordingly.

## 1. Unified Package for Simpler Usage

### Breaking Change
In version 2, the separate packages (`d42`, `district42`, `blahblah`, `valera`, and `revolt`) have been merged into a single package: `d42`. This consolidation makes managing imports easier for users of the package but requires changes to your existing codebase.

### Migration Steps:
All your existing imports from these individual packages will need to be updated to reference the unified `d42` package.

**Before (v1):**
```python
from district42 import schema
from blahblah import fake
from valera import validate_or_fail
from revolt import substitute
```

**After (v2):**
```python
from d42 import schema, fake, validate_or_fail, substitute
```

To make this transition easier, you can use the automated migration script included in `d42` version 2:

```shell
$ d42 v1-to-v2 schemas/
```

This script will update your imports for you, saving time and effort.

## 2. Removal of `schema.const`

### Breaking Change
In version 1, `schema.const` was used to define schema types with constant values. This feature has been deprecated and removed in version 2 for a more streamlined approach.

### Migration Steps:
Rather than using `schema.const`, you now specify constant values directly within the type constructors.

**Before (v1):**
```python
schema.const(42)
schema.const("banana")
```

**After (v2):**
```python
schema.int(42)
schema.str("banana")
```

This change leads to more intuitive and consistent schema definitions, improving overall usability for those working with the package.
