"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../entities/Product");
class ProductController {
    async store(req, res) {
        const { name, price, productCategoryId } = req.body;
        const product = new Product_1.Product();
        product.name = name;
        product.price = price;
        product.productCategoryId = productCategoryId;
        await product.save();
        return res.status(201).json(product);
    }
    async index(req, res) {
        const products = await Product_1.Product.find();
        return res.json(products);
    }
    async show(req, res) {
        const { id } = req.params;
        const product = await Product_1.Product.findOne({
            where: { id },
            relations: ["productCategory"],
        });
        return res.json(product);
    }
    async update(req, res) {
        const { id } = req.params;
        const { name, price, productCategoryId } = req.body;
        const product = await Product_1.Product.findOne(id);
        product.name = name !== null && name !== void 0 ? name : product.name;
        product.price = price !== null && price !== void 0 ? price : product.price;
        product.productCategoryId = productCategoryId !== null && productCategoryId !== void 0 ? productCategoryId : product.productCategoryId;
        await product.save();
        return res.json(product);
    }
    async delete(req, res) {
        const { id } = req.params;
        const product = await Product_1.Product.findOne(id);
        await product.remove();
        return res.status(200);
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map