---
id: libs
slug: libs
---
# Libs

import { PluginList, Plugin } from '../components/PluginList';

The [d42](https://pypi.org/project/d42/) package encompasses several key components of the district42 ecosystem:

- [district42](https://pypi.org/project/district42/): A data description language for defining data models.
- [blahblah](https://pypi.org/project/blahblah/): A fake data generator for district42 schemas.
- [valera](https://pypi.org/project/valera/): A validator for district42 schemas.
- [revolt](https://pypi.org/project/revolt/): A value substitutor for district42 schemas.

Additionally, [district42-exp-types](https://pypi.org/project/district42-exp-types/) offers experimental types for further exploration.

## Integrations

<PluginList>
    <Plugin name="vedro-valera-validator" pypi="vedro-valera-validator" desc="vedro + district42" />
    <Plugin name="aiohttp-valera-validator" pypi="aiohttp-valera-validator" desc="aiohttp + district42" />
    <Plugin name="jj-district42" pypi="jj-district42" desc="jj + district42" />
    <Plugin name="schemax" pypi="schemax" desc="JSON Schema + district42" />
</PluginList>

Discover more on [GitHub](https://github.com/topics/district42)
