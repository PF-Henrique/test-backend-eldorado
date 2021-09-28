import { Router } from "express";

import ProductCategoryController from "../controllers/ProductCategoryController";
import ProductController from "../controllers/ProductController";

const routes = Router();

// Categories routes
routes.get("/product-categories", ProductCategoryController.index);
routes.post("/product-categories", ProductCategoryController.store);
routes.get("/product-categories/:id", ProductCategoryController.show);
routes.put("/product-categories/:id", ProductCategoryController.update);
routes.delete("/product-categories/:id", ProductCategoryController.delete);

// Product routes
routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

export default routes;
