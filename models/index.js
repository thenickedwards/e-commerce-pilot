// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// HW13 TODO: Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// HW13 TODO: Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// HW13 TODO: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  as: "product_tags",
});

// HW13 TODO: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

// Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.
// Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
