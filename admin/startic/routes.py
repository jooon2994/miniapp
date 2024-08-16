from flask import Blueprint, render_template, request, redirect, url_for
from .models import Product

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/')
def admin_dashboard():
    products = Product.query.all()
    return render_template('admin.html', products=products)

@admin_bp.route('/add_product', methods=['POST'])
def add_product():
    name = request.form.get('name')
    price = request.form.get('price')
    image_url = request.form.get('image_url')
    
    if name and price and image_url:
        new_product = Product(name=name, price=price, image_url=image_url)
        db.session.add(new_product)
        db.session.commit()
    return redirect(url_for('admin.admin_dashboard'))

@admin_bp.route('/orders')
def view_orders():
    # Code to fetch orders from the database
    return render_template('orders.html', orders=orders)
