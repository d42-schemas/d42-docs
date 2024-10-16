---
id: aiohttp
title: aiohttp
slug: aiohttp
---
# aiohttp

The [aiohttp-d42-validator](https://pypi.org/project/aiohttp-d42-validator/) package allows you to use [d42](https://pypi.org/project/d42/) as a validation tool for your [aiohttp](https://docs.aiohttp.org) web server.

## Installation

To install the package, use the following command:

```shell
$ pip3 install aiohttp-d42-validator
```

## Usage

To use `aiohttp-d42-validator`, you need to define a schema for the request parameters using [d42](https://pypi.org/project/d42/). To do this, define a `ParamsSchema` schema:

```python
from d42 import schema

ParamsSchema = schema.dict({
    "q": schema.str.len(1, ...)
})
```

In this example, the `ParamsSchema` schema defines a required parameter `q` that must be a string with at least one character.

Then, use the` @validate` decorator from `aiohttp-d42-validator` to validate the request parameters against the schema, as shown in the example below:

```python
from aiohttp.web import Application, json_response, route, run_app
from aiohttp_d42_validator import validate


@validate(params=ParamsSchema)
async def handler(request):
    q = request.query["q"]
    return json_response({"q": q})


app = Application()
app.add_routes([route("GET", "/users", handler)])
run_app(app)
```

To test the app, you can use the [httpie](https://httpie.io/docs/cli) command-line tool to send requests to the app, as shown in the examples below:

```shell
# Send a request with a valid parameter
$ http /users?q=Bob
{
    "q": "Bob"
}

# Send a request with an invalid parameter
$ http /users
{
    "errors": [
        "Value <class 'str'> at _['q'] must have at least 1 element, but it has 0 elements"
    ]
}
```

:::info

For more information on the `aiohttp-d42-validator` package, see the [documentation](https://pypi.org/project/aiohttp-d42-validator/). For more information on `aiohttp`, see the [aiohttp documentation](https://docs.aiohttp.org/en/stable/).

:::
