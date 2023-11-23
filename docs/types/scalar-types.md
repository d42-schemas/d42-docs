---
id: scalar-types
---
# Scalar Types

export const defaultTab = "declare";

Scalar types represent a single value and cannot contain other types. They are used to define simple data types.

## None

### schema.none

import NoneType from '../_types/none/none.md';

<NoneType defaultTab={defaultTab} />

<br />


## Bool

### schema.bool

import BoolType from '../_types/bool/bool.md';

<BoolType defaultTab={defaultTab} />

### schema.bool(`value`)

import BoolValueType from '../_types/bool/bool_value.md';

<BoolValueType defaultTab={defaultTab} />

<br />


## Int

### schema.int

import IntType from '../_types/int/int.md';

<IntType defaultTab={defaultTab} />

### schema.int(`value`)

import IntValueType from '../_types/int/int_value.md';

<IntValueType defaultTab={defaultTab} />

### schema.int.min(`value`)

import IntMinType from '../_types/int/int_min.md';

<IntMinType defaultTab={defaultTab} />

### schema.int.max(`value`)

import IntMaxType from '../_types/int/int_max.md';

<IntMaxType defaultTab={defaultTab} />

<br />


## Float

### schema.float

import FloatType from '../_types/float/float.md';

<FloatType defaultTab={defaultTab} />

### schema.float(`value`)

import FloatValueType from '../_types/float/float_value.md';

<FloatValueType defaultTab={defaultTab} />

### schema.float.min(`value`)

import FloatMinType from '../_types/float/float_min.md';

<FloatMinType defaultTab={defaultTab} />

### schema.float.max(`value`)

import FloatMaxType from '../_types/float/float_max.md';

<FloatMaxType defaultTab={defaultTab} />

<br />


## Str

### schema.str

import StrType from '../_types/str/str.md';

<StrType defaultTab={defaultTab} />

### schema.str(`value`)

import StrValueType from '../_types/str/str_value.md';

<StrValueType defaultTab={defaultTab} />

### schema.str.len(`length`)

import StrLenType from '../_types/str/str_len.md';

<StrLenType defaultTab={defaultTab} />

### schema.str.len(`min_length`, ...)

import StrMinLenType from '../_types/str/str_min_len.md';

<StrMinLenType defaultTab={defaultTab} />

### schema.str.len(..., `max_length`)

import StrMaxLenType from '../_types/str/str_max_len.md';

<StrMaxLenType defaultTab={defaultTab} />

### schema.str.len(`min_length`, `max_length`)

import StrMinMaxLenType from '../_types/str/str_min_max_len.md';

<StrMinMaxLenType defaultTab={defaultTab} />

### schema.str.alphabet(`letters`)

import StrAlphabetType from '../_types/str/str_alphabet.md';

<StrAlphabetType defaultTab={defaultTab} />

### schema.str.contains(`substr`)

import StrContainsType from '../_types/str/str_contains.md';

<StrContainsType defaultTab={defaultTab} />

### schema.str.regex(`pattern`)

import StrRegexType from '../_types/str/str_regex.md';

<StrRegexType defaultTab={defaultTab} />


## Bytes

:::note
New in version 1.4
:::

### schema.bytes

import BytesType from '../_types/bytes/bytes.md';

<BytesType defaultTab={defaultTab} />

<br />


## Datetime

:::note
New in version 1.6
:::

### schema.datetime

import DatetimeType from '../_types/datetime/datetime.md';

<DatetimeType defaultTab={defaultTab} />

### schema.datetime(`value`)

import DatetimeValueType from '../_types/datetime/datetime_value.md';

<DatetimeValueType defaultTab={defaultTab} />

<br />
