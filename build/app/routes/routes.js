"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductCategoryController_1 = __importDefault(require("../controllers/ProductCategoryController"));
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const routes = (0, express_1.Router)();
// Categories routes
routes.get("/product-categories", ProductCategoryController_1.default.index);
routes.post("/product-categories", ProductCategoryController_1.default.store);
routes.get("/product-categories/:id", ProductCategoryController_1.default.show);
routes.put("/product-categories/:id", ProductCategoryController_1.default.update);
routes.delete("/product-categories/:id", ProductCategoryController_1.default.delete);
// Product routes
routes.get("/products", ProductController_1.default.index);
routes.post("/products", ProductController_1.default.store);
routes.get("/products/:id", ProductController_1.default.show);
routes.put("/products/:id", ProductController_1.default.update);
routes.delete("/products/:id", ProductController_1.default.delete);
exports.default = routes;
//# sourceMappingURL=routes.js.map