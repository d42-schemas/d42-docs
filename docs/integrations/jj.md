---
id: jj
title: jj
slug: jj
---
# jj

## Installation

```shell
$ pip3 install jj-district42
```

Documentation — https://pypi.org/project/jj-district42/

## Usage

### Server Side

Start remote mock:

```shell
$ docker run -p 8080:80 nikitanovosibirsk/jj
```

### Client Side

```python
import jj
import httpx
from jj.mock import mocked
from jj_district42 import HistorySchema
from valera import validate_or_fail


matcher = jj.match("GET", "/users")
response = jj.Response(status=200, json=[])

with mocked(matcher, response) as mock:
    resp = httpx.get("http://localhost:8080/users", params={"user_id": 1})

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

More examples are available [here](https://github.com/tsv1/jj-district42/tree/master/examples)
