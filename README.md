# flaskOnlineStore
Online blogging system made with python. Commands to reset .db files:
```python
from app.app import db
db.reset_all()
db.reset_all(bind = "userDb")
db.reset_all(bind = "itemDb")
```
