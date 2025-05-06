 
import React, { useState } from 'react';
import './ShopEasy.css';
 
const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', description: 'High-quality Bluetooth headphones with noise cancellation.', price: 2999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgyR6GolZhdekEpQpEfYf97USuYgYGhA5lCwsJKZl19W75XMQdQbbR32DryH-nPMvlgOotghSzVT97NeP1ziE4QB7KdhvIYpj9_cEbSO_SqDThKHGXxWeSTQ', rating: 4 },
  { id: 2, name: 'Smart Watch', description: 'Track your fitness and notifications on the go.', price: 4999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyRnp-SZJ12m3YNXe92bo5u_R_9PoTtaE0kwcIms0y3myCN40XZk_9WeXaPy0l1TkEmV9QxEUl4yfZPsocVIsiLRzWfj41j2-aBcsROsVkCYWRDE9Vy5HS', rating: 5 },
  { id: 3, name: 'Bluetooth Speaker', description: 'Portable speaker with powerful sound.', price: 1999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJ8MazmpULrZWNroSHCK3S69XIourJYXvKaBqWnB9woc1BSVWCdbkhGzYzQ2JLtb6byZvkwgUZ7OyUEWYUmdY9dJG74qFDQS_G2IGLkIHWWOTGMswuw_2w', rating: 3 },
  { id: 4, name: 'Laptop Stand', description: 'Ergonomic stand for laptops.', price: 1499, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-YcsPMZSk0yjxkSTeLkleRfD_p7XxhxbNxcOiTrr2lVDuLa0Sh9Oug11IukKtzdlHZwnMaNcTib-arycf4rg3--1esAiEZNCQjmL2Nz7KyGwXnm2c3jkjTSq0w5PNNMQIy1NRSerebQ&usqp=CAc', rating: 2 },
  { id: 5, name: 'External Hard Drive', description: '1TB Portable external hard drive.', price: 3999, image: 'https://m.media-amazon.com/images/I/510+J06fz0L.jpg', rating: 4 },
  { id: 6, name: 'Smartphone', description: 'Latest model smartphone with advanced features.', price: 19999, image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTugnXmUSYYwVCZWGvk1rRP7Wr8bVxQ79mM2MAkn7l_-6HRtHZe7wNE1g9AqQfKAa54eSLvQNOP8po2eumIrVgZySBJNjiw7jZVKVRNsXnNPFyAnI1i9wQBeHIrpKb7eimlbU6UBbnTtw&usqp=CAc', rating: 5 },
  { id: 7, name: 'Tablet', description: 'High-resolution display tablet.', price: 12999, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1O6DDeCxuQja787StHuCzrXfUJl5sxMICF_2Fw_KrzAYIcuBpup78LOBjNIWWrJp5AQBy8kmaFsuxc0__NavLEJCEu-WP_wAeHXkmqVTzXsfAylgVtfMjxdfqbbw9_DvicSk--w867SU&usqp=CAc', rating: 3 },
  { id: 8, name: 'Gaming Console', description: 'Next-gen gaming console.', price: 29999, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOGL2FM-NtV7wNLkqsbcLQLx5nTUanK1vbaWocSYrnueFh-2l-f3lcfiKFXWl1wZwrcXaUlaM29KfftphjrRGPikkcUNeGPKx6b3sxTrlI0N3b-EEMY0X5_g', rating: 5 },
  { id: 9, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse.', price: 799, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqZLesZXRQwWXaDOtH0sZzDufn74w6758QLU2itMrIsv8G8SWajcKjGL8P4Tok-icevVkIdlXULZoSN-IeNhw8XV0Sb-fNLpMZO3Ioo1CTLfZIZlx478rK8A', rating: 4 },
  { id: 10, name: 'Doll', description: 'A cute beautifull doll.', price: 999, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/doll-doll-house/a/o/e/30cm-1ps-of-girls-look-durable-fashion-princess-doll-hand-legs-original-imagzfbnjmphufqd.jpeg?q=20&crop=false', rating: 2 }
];
 
function ProductsPage() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
 
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
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="rating">{renderStars(product.rating)}</div>
              <p>{product.description}</p>
              <strong>₹{product.price}</strong>
              <button onClick={() => addToCart(product)}>
                {`+ Add to Cart ${cartItem ? `(${cartItem.quantity})` : ''}`}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 
export default ProductsPage;