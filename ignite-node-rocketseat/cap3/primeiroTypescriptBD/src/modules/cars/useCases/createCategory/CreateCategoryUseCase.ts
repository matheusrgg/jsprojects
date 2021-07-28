import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string,
  description: string
}
// SOLID - a) Single Responsability Principle
class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    // const categoriesRepository = new CategoriesRepository();
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    console.log("cade ", categoryAlreadyExists)
    if (categoryAlreadyExists) {
      //return response.status(400).json({ error: "Category Already exists !" });
      throw new Error("Category Already exists !")
    }

    this.categoriesRepository.create({ name, description });



  }

}

export { CreateCategoryUseCase }