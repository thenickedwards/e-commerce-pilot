const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // HW13 TODO find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
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

router.delete('/:id', async (req, res) => {
  // HW13 TODO: delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
