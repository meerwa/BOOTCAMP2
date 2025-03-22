import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'test'
DATABASE = 'DAY4'

def run_query(query):
    conn = psycopg2.connect(
        host=HOSTNAME,
        user=USERNAME,
        password=PASSWORD,
        dbname=DATABASE
    )
    cursor = conn.cursor()
    cursor.execute(query)
    
    results = []
    try:
        results = cursor.fetchall()
    except:
        pass
    
    conn.commit()
    cursor.close()
    conn.close()
    
    return results

query = '''
CREATE TABLE IF NOT EXISTS Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

'''
run_query(query)
print("Table 'Menu_Items' is ready.")