from Database import get_db_connection

class MenuItem:
    def __init__(self, item_id=None, name="", price=0):
        self.item_id = item_id
        self.name = name
        self.price = price

    @classmethod
    def create(cls, name, price):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id;",
                       (name, price))
        item_id = cursor.fetchone()[0]
        connection.commit()
        cursor.close()
        connection.close()

        return cls(item_id, name, price)




    @classmethod
    def get(cls, item_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM Menu_Items WHERE item_id = %s;", (item_id,))
        item = cursor.fetchone()
        cursor.close()
        connection.close()

        if item:
            return cls(item[0], item[1], item[2])
        return None




    @classmethod
    def update(cls, item_id, name=None, price=None):
        connection = get_db_connection()
        cursor = connection.cursor()

        updates = []
        if name:
            updates.append(f"item_name = %s")
        if price is not None:
            updates.append(f"item_price = %s")

        if updates:
            query = f"UPDATE Menu_Items SET {', '.join(updates)} WHERE item_id = %s;"
            cursor.execute(query, tuple([x for x in [name, price, item_id] if x is not None]))
            connection.commit()

        cursor.close()
        connection.close()






    @classmethod
    def delete(cls, item_id):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("DELETE FROM Menu_Items WHERE item_id = %s;", (item_id,))
        connection.commit()

        cursor.close()
        connection.close()




    @classmethod
    def get_all(cls):
        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM Menu_Items;")
        items = cursor.fetchall()
        cursor.close()
        connection.close()

        return [cls(item[0], item[1], item[2]) for item in items]