const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // HW13 TODO: find all tags
  // be sure to include its associated Product data
  
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', (req, res) => {
  // HW13 TODO: find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // HW13 TODO: create a new tag
});

router.put('/:id', (req, res) => {
  // HW13 TODO: update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // HW13 TODO: delete on tag by its `id` value
});

module.exports = router;
