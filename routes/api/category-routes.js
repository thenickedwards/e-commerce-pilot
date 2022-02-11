const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // HW13 TODO: find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // HW13 TODO: find one category by its `id` value
  // HW13 TODO: be sure to include its associated Products
});

router.post('/', (req, res) => {
  // HW13 TODO: create a new category
});

router.put('/:id', (req, res) => {
  // HW13 TODO: update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // HW13 TODO: delete a category by its `id` value
});

module.exports = router;
