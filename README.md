# flaskOnlineStore
Online store made with python. Commands to reset .db files:
```python
from app.app import db
db.create_all()
db.create_all(bind = "userDb")
db.create_all(bind = "itemDb")
```
