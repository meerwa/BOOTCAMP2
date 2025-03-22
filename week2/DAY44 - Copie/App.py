from flask import Flask, request, jsonify
from menu_manage import MenuManager
from menu_item import MenuItem

app = Flask(__name__)

@app.route('/menu', methods=['GET'])
def get_menu():
    items = MenuManager.all_items()
    menu = [{'id': item.id, 'name': item.name, 'price': item.price} for item in items]
    return jsonify(menu), 200

@app.route('/', methods=['GET'])
def get_menu1():
    return "test"

@app.route('/menu/<int:item_id>', methods=['GET'])
def get_item(item_id):
    item = MenuManager.get_by_id(item_id)
    if item:
        return jsonify({'id': item.id, 'name': item.name, 'price': item.price}), 200
    else:
        return jsonify({'error': 'Item not found'}), 404

@app.route('/menu', methods=['POST'])
def add_item():
    data = request.json
    name = data.get('name')
    price = data.get('price')
    
    if not name or price is None:
        return jsonify({'error': 'Name and price are required'}), 400

    item = MenuItem(name, price)
    item.save()
    return jsonify({
        'message': f"Item '{name}' added successfully!",
        'id': item.id
    }), 201

@app.route('/menu/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.json
    new_name = data.get('name')
    new_price = data.get('price')

    item = MenuManager.get_by_id(item_id)
    if item:
        item.update(new_name, new_price)
        return jsonify({'message': f"Item with id '{item_id}' updated successfully!"}), 200
    else:
        return jsonify({'error': 'Item not found'}), 404

@app.route('/menu/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    item = MenuManager.get_by_id(item_id)
    if item:
        item.delete()
        return jsonify({'message': f"Item with id '{item_id}' deleted successfully!"}), 200
    else:
        return jsonify({'error': 'Item not found'}), 404
    


if __name__ == '__main__':
    app.run(debug=True)