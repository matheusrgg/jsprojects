import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {

  const categoriesRepository = null
  //use case
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
}
