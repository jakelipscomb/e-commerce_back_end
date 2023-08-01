const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Category.hasMany(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

Category.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "category_id",
});

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
