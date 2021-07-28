import { Router } from 'express';

// import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
// import { PostgresCategoriesRepository } from '../modules/cars/repositories/PostgresCategoriesRepository';
// import { CreateCategoryService } from '../modules/cars/useCases/createCategory/CreateCategoryUseCase';

const categoriesRoutes = Router();
// const categoriesRepository = new PostgresCategoriesRepository()
// const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
  // const all = categoriesRepository.list();
  // return response.json(all)
  return listCategoriesController.handle(request, response);
})


export { categoriesRoutes }