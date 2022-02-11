// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// HW13 TODO: Products belongsTo Category
Product.belongsTo(Category);

// HW13 TODO: Categories have many Products
Category.hasMany(Product);

// HW13 TODO: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});

// HW13 TODO: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tags_product'
});


// Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
