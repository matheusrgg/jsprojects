import { Router } from 'express';

import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
const categoriesRoutes = Router();


const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
})

export { categoriesRoutes }