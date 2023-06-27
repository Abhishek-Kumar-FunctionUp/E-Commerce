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
  const [favorites, setFavorites] = useState([]);

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
      const filtered = products.filter((product) => {
        if (appliedCategory === 'jewelry' && product.category === 'jewelery') {
          return true;
        } else if (appliedCategory === 'men' && product.category === "men's clothing") {
          return true;
        } else if (appliedCategory === 'women' && product.category === "women's clothing") {
          return true;
        } else {
          return false;
        }
      });
      setFilteredProducts(filtered);
    }
  }, [appliedCategory, products]);

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
    alert('Added to cart!');
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
          <h3 className="category-heading">Categories</h3>
          <div className="category-checkboxes">
            <label>
              <input
                type="checkbox"
                value="jewelry"
                checked={selectedCategory === 'jewelry'}
                onChange={() => filterProducts('jewelry')}
              />
              <span className="category-label">Jewellery</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="men"
                checked={selectedCategory === 'men'}
                onChange={() => filterProducts('men')}
              />
              <span className="category-label">Men's Clothing</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="women"
                checked={selectedCategory === 'women'}
                onChange={() => filterProducts('women')}
              />
              <span className="category-label">Women's Clothing</span>
            </label>
            <label>
              <input
                type="checkbox"
                value="all"
                checked={selectedCategory === 'all'}
                onChange={() => filterProducts('all')}
              />
              <span className="category-label">All</span>
            </label>
          </div>
          <div className="filter-actions">
            <button className="apply-button" onClick={applyFilter}>
              Apply
            </button>
            {showAppliedCategory && (
              <button className="apply-button" onClick={clearFilter}>
                Clear Filter
              </button>
            )}
          </div>
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
