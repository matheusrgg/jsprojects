import { Category } from "../../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// singleton 

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();

    }
    return CategoriesRepository.INSTANCE;
  }

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    //percorrer nossso array e procurar alguma condição
    const category = this.categories.find(category => category.name === name);
    console.log("console log find by name ", category)
    return category;

  }

}

export { CategoriesRepository }