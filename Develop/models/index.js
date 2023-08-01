// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Category.hasMany(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

// Categories have many Categorys
Category.belongsTo(Category, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "category_id",
});

// Tags belongToMany Products (through ProductTag)
Category.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "product_id",
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
