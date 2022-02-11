// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// HW13 TODO: Products belongsTo Category

// HW13 TODO: Categories have many Products

// HW13 TODO: Products belongToMany Tags (through ProductTag)

// HW13 TODO: Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
