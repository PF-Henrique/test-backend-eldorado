"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductCategory_1 = require("../entities/ProductCategory");
class ProductCategoryController {
    // create
    async store(req, res) {
        const { name } = req.body;
        const productCategory = new ProductCategory_1.ProductCategory();
        productCategory.name = name;
        await productCategory.save();
        return res.status(201).json(productCategory);
    }
    // List all
    async index(req, res) {
        const productCategories = await ProductCategory_1.ProductCategory.find();
        console.log("cheguei");
        return res.json(productCategories);
    }
    // List per id
    async show(req, res) {
        const { id } = req.params;
        console.log("cheguei");
        const productCategory = await ProductCategory_1.ProductCategory.findOne({
            where: { id },
            relations: ["products"],
        });
        return res.json(productCategory);
    }
    // update per id
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        console.log("cheguei");
        const productCategory = await ProductCategory_1.ProductCategory.findOne(id);
        productCategory.name = name;
        await productCategory.save();
        return res.json(productCategory);
    }
    // delete per id
    async delete(req, res) {
        const { id } = req.params;
        console.log("cheguei");
        const productCategory = await ProductCategory_1.ProductCategory.findOne(id);
        await productCategory.remove();
        return res.status(200);
    }
}
exports.default = new ProductCategoryController();
//# sourceMappingURL=ProductCategoryController.js.map