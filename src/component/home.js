import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import './home.css';
import Navbar from './navbar';
import ProductDetailsModal from '../pages/details';

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [appliedCategory, setAppliedCategory] = useState('all');
  const [showAppliedCategory, setShowAppliedCategory] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[favorites,setFavorites]=useState([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    if (appliedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === appliedCategory);
      setFilteredProducts(filtered);
    }
  }, [appliedCategory]);

  const filterProducts = (category) => {
    setSelectedCategory(category);
  };

  const applyFilter = () => {
    setAppliedCategory(selectedCategory);
    setShowAppliedCategory(true);
  };

  const clearFilter = () => {
    setAppliedCategory('all');
    setShowAppliedCategory(false);
    setSelectedCategory('all');
  };

  const addToCartHandler = (product) => {
    props.addToCart(product);
    alert('added');
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  
const toggleFavorite = (product) => {
    const updatedFavorites = favorites.includes(product.id)
      ? favorites.filter((id) => id !== product.id)
      : [...favorites, product.id];
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="categorize">
          <h3>Categories</h3>
          <label>
            <input
              type="checkbox"
              value="electronics"
              checked={selectedCategory === 'electronics'}
              onChange={() => filterProducts('electronics')}
            />
            <span>Electronics</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="clothing"
              checked={selectedCategory === 'clothing'}
              onChange={() => filterProducts('clothing')}
            />
            <span>Clothing</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="home"
              checked={selectedCategory === 'home'}
              onChange={() => filterProducts('home')}
            />
            <span>Home</span>
          </label>
          <button onClick={applyFilter}>Apply</button>
          {showAppliedCategory && <button onClick={clearFilter}>Clear Filter</button>}
        </div>
        <div className="product-cards">
        {filteredProducts.map((product) => (
  <div key={product.id} className="card">
    <img src={product.image} alt={product.title} className="card-image" />
    <h3 className="card-title">{product.title}</h3>
    <div className="card-buttons">
      <button className="add-to-cart" onClick={() => addToCartHandler(product)}>
        Add to Cart
      </button>
      <button className="details" onClick={() => openModal(product)}>
        Details
      </button>
      <button
        className={`favorite ${favorites.includes(product.id) ? 'active' : ''}`}
        onClick={() => toggleFavorite(product)}
      >
        Favorite
      </button>
    </div>
  </div>
))}

        </div>
      </div>
      {isModalOpen && (
        <ProductDetailsModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export default connect(null, { addToCart })(Home);
