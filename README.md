# flaskOnlineStore
Online store made with python. Steps to reset .db files:
```
1. Delete db files.
2. Open Python Console.
3. Time the commands below.
```
```python
from app.app import db
db.create_all()
db.create_all(bind = "userDb")
db.create_all(bind = "itemDb")
```
