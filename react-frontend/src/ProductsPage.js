 
import React, { useEffect,useState } from 'react';
import './ShopEasy.css';
import axios from 'axios';
 
function ProductsPage() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [sampleProducts, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response= await axios.get("http://localhost:8080/api/products");
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
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
 
  return (
    <div className="page products-page">
        <h1 className='products-heading'>Products</h1>
      <h2>  </h2>
      <div className="product-grid">
        {sampleProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="rating">{renderStars(product.rating)}</div>
              <p>{product.description}</p>
              <strong>₹{product.price}</strong>
              <button onClick={() => addToCart(product)}>
                {`+ Add to Cart ${cartItem ? `(${cartItem.stock})` : ''}`} 
              </button>
            </div>
          );
        })}
      </div>
    </div>
    // <div>
    //   {/* Render your products here */}
    //   {sampleProducts.map(product => (
    //     <div key={product.id}>
    //       <h3>{product.title}</h3>
    //       <p>{product.description}</p>
    //     </div>
    //   ))}
    // </div>
  );
}
 
export default ProductsPage;