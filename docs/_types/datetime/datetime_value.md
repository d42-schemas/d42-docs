import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from datetime import datetime
from d42 import schema

now = datetime.now()
sch = schema.datetime(now)
```

  </TabItem>

  <TabItem value="generate">

```python
from datetime import datetime
from d42 import schema, fake

now = datetime.now()
sch = schema.datetime(now)

assert fake(sch) == now
```

  </TabItem>

  <TabItem value="validate">

```python
from datetime import datetime, timedelta
from d42 import schema, fake

now = datetime.now()
sch = schema.datetime(now)

assert sch == now
```

```python
assert sch != now + timedelta(seconds=+1)  # incorrect value
```

  </TabItem>

  <TabItem value="substitute">

```python
from datetime import datetime, timedelta
from d42 import schema

now = datetime.now()
sch = schema.datetime(now)

assert sch % now == schema.datetime(now)
```

```python
with assertRaises(SubstitutionError):
  sch % (now + timedelta(seconds=+1))  # incorrect value
```

  </TabItem>

</Tabs>
