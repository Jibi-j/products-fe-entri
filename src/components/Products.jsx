import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null);  

  useEffect(() => {
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://products-backend-entri.onrender.com/products");  
        setProducts(response.data); 
      } catch (err) {
        setError('Error fetching products');
        console.log(err);
      }
    };
 
    fetchProducts();  
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      {error && <p className="text-danger text-center">{error}</p>}  
      <Row>
        {products.length > 0 ? (
          products.map((product) => (
            <Col md={4} key={product._id} className="mb-4">
              <Card className="product-card">
                <div className="card-body">
                  <Card.Img variant="top" src={product.imageUrl} alt={product.name} className="product-image" />
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}</Card.Text>
                  <h5 className="product-price">${product.price}</h5>
                  <Button variant="primary" className="w-100 add-to-cart-btn">Add to Cart</Button>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">Loading products...</p>  
        )}
      </Row>
    </Container>
  );
};

export default Products;
