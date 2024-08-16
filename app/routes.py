from flask import Blueprint, render_template, redirect, url_for, request, session
from admin.models import Product

app_bp = Blueprint('app', __name__)

@app_bp.route('/')
def index():
    products = Product.query.all()
    return render_template('index.html', products=products)

@app_bp.route('/cart')
def cart():
    # Logic to handle cart display and operations
    return render_template('cart.html')

@app_bp.route('/checkout')
def checkout():
    if not session.get('user_id'):
        return redirect(url_for('app.register'))
    # Proceed with checkout
    return render_template('checkout.html')

@app_bp.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Handle registration logic here
        pass
    return render_template('registration.html')
