import { Request, Response } from "express";

import { Product } from "../entities/Product";

class ProductController {
  async store(req: Request, res: Response) {
    const { name, color, parthNumber, productCategoryId } = req.body;

    const product = new Product();

    product.name = name;
    product.color = color;
    product.parthNumber = parthNumber;
    product.productCategoryId = productCategoryId;

    await product.save();

    return res.status(201).json(product);
  }

  async index(req: Request, res: Response) {
    const products = await Product.find();

    return res.json(products);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const product = await Product.findOne({
      where: { id },
      relations: ["productCategory"],
    });

    return res.status(200).json(product);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, color, parthNumber, productCategoryId } = req.body;

    const product = await Product.findOne(id);

    product.name = name ?? product.name;
    product.color = color ?? product.color;
    product.parthNumber = parthNumber ?? product.parthNumber;
    product.productCategoryId = productCategoryId ?? product.productCategoryId;

    await product.save();

    return res.status(200).json(product);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const product = await Product.findOne(id);

    await product.remove();

    return res.status(200);
  }
}

export default new ProductController();
