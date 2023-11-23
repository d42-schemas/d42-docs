---
id: container-types
---
# Container Types

Container types are specialized types that can encapsulate other types, playing a crucial role in defining complex structures in data modeling.

- [Dict](./container-types/dict) — Used for defining schemas for dictionaries, where values are themselves defined as schemas. This type facilitates the creation of structured key-value pairs, which is particularly suitable for JSON objects and similar data formats.
- [List](./container-types/list) — Designed for handling arrays or sequences of elements, each following a specified schema. This type can accommodate both homogeneous and heterogeneous data structures, offering versatility in array-like data organization.
- [Any](./container-types/any) — Provides maximum flexibility by accommodating any data type within the schema. It functions effectively as a union type, making it extremely useful in scenarios with dynamic, diverse, or undetermined data types.
