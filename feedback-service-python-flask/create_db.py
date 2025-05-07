import sqlite3

conn = sqlite3.connect('feedback.db')
c = conn.cursor()

c.execute('''
    CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT NOT NULL,
        comment TEXT NOT NULL
    )
''')

conn.commit()
conn.close()
