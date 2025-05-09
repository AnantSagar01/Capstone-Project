import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopEasy.css';
import axios from 'axios';

function ProductsPage() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let newCart;

    if (existingProduct) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    alert(`${product.name} added to cart!`);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`); // Navigate to the ProductDetailsPage
  };

  return (
    <div className="page products-page">
      <h1 className='products-heading'>Products</h1>
      <div className="product-grid">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
              <img src={product.image} alt={product.title} />
              <div className="content">
                <h3>{product.title}</h3>
                
                <p>{product.description}</p>
                <div className="price-add-to-cart">
                  <strong>₹{product.price}</strong>
                  <button onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                    {`+ Add to Cart ${cartItem ? `(${cartItem.quantity})` : ''}`}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;