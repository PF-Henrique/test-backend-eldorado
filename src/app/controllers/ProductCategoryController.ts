import { Request, Response } from "express";

import { ProductCategory } from "../entities/ProductCategory";

class ProductCategoryController {
  // create
  async store(req: Request, res: Response) {
    const { name } = req.body;

    const productCategory = new ProductCategory();

    productCategory.name = name;

    await productCategory.save();

    return res.status(201).json(productCategory);
  }
  // List all
  async index(req: Request, res: Response) {
    const productCategories = await ProductCategory.find();
    console.log("cheguei");

    return res.json(productCategories);
  }
  // List per id
  async show(req: Request, res: Response) {
    const { id } = req.params;
    console.log("cheguei");

    const productCategory = await ProductCategory.findOne({
      where: { id },
      relations: ["products"],
    });

    return res.json(productCategory);
  }
  // update per id
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;
    console.log("cheguei");

    const productCategory = await ProductCategory.findOne(id);

    productCategory.name = name;

    await productCategory.save();

    return res.json(productCategory);
  }
  // delete per id
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    console.log("cheguei");

    const productCategory = await ProductCategory.findOne(id);

    await productCategory.remove();

    return res.status(200);
  }
}

export default new ProductCategoryController();
