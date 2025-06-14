---
id: jj
title: jj
slug: jj
---
# jj

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The [jj-d42](https://pypi.org/project/jj-d42/) package allows you to use d42 schemas with [jj](https://jj-mock.io) mock.

## Installation

To install the package, use the following command:

```shell
$ pip3 install jj-d42
```

## Usage

### Server Side

First you need to start the remote mock server. To do this, run the following command:

<Tabs>
  <TabItem value="Python">

```shell
$ python3 -m jj --port 8080
```

  </TabItem>
    <TabItem value="Docker">

```shell
$ docker run -p 8080:80 ghcr.io/jj-mock/jj
```

  </TabItem>
</Tabs>

### Client Side

Then you can use `jj-d42` to define the schema for the response and validate it against the actual response.

```python
import jj
import httpx
from jj.mock import mocked
from jj_d42 import HistorySchema
from d42 import validate_or_fail

# Define the matcher and the response for the request
matcher = jj.match("GET", "/users")
response = jj.Response(status=200, json=[])

# Use the `mocked` context manager to capture the request and response data
with mocked(matcher, response) as mock:
    resp = httpx.get("http://localhost:8080/users", params={"user_id": 1})

# Validate the mock history against the schema
assert validate_or_fail(
    HistorySchema % [
        {
            "request": {
                "method": "GET",
                "path": "/users",
                "params": {"user_id": "1"},
            }
        }
    ],
    mock.history
)
```

This code will validate the mock history against the `HistorySchema` and raise a `ValidationException` if the validation fails.

:::info

For more examples of using `jj-d42`, see the [examples directory](https://github.com/jj-mock/jj-d42/tree/master/examples)

:::
