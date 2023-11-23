import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue={props.defaultTab}>
  <TabItem value="declare">

```python
from d42 import schema

sch = schema.datetime
```

  </TabItem>

  <TabItem value="generate">

```python
from datetime import datetime
from d42 import schema, fake

sch = schema.datetime

assert isinstance(fake(sch), datetime)
```

  </TabItem>

  <TabItem value="validate">

```python
from datetime import datetime, time
from d42 import schema

sch = schema.datetime

assert sch == datetime.now()
```

```python
assert sch != time()  # incorrect type
```

  </TabItem>

  <TabItem value="substitute">

```python
from datetime import datetime, time
from d42 import schema

sch = schema.datetime
now = datetime.now()

assert sch % now == schema.datetime(now)
```

```python
with assertRaises(SubstitutionError):
  sch % time()  # incorrect type
```

  </TabItem>

</Tabs>
