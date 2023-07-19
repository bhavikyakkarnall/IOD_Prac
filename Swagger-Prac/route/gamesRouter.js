import express from 'express';
import allGames from '../data-storage/dataStorage.js';

const router = express.Router();

// Get all products
router.get('/', (req,res) => {
    res.json(allGames);
});

// Get a product by ID
router.get('/:id', (req, res) => {
    const product = getProductById(parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  
  // Create a new product
  router.post('/', (req, res) => {
    const { id, name, price } = req.body;
    const newProduct = createProduct(id, name, price);
    res.status(201).json(newProduct);
  });
  
  // Update a product
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedProduct = updateProduct(parseInt(id), name, price);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });
  
  // Delete a product
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedProduct = deleteProduct(parseInt(id));
    if (deletedProduct) {
      res.json(deletedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

export default router;