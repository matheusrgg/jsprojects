import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// singleton 

class CategoriesRepository implements ICategoriesRepository {
  // private categories: Category[];

  private repository: Repository<Category>;

  // private static INSTANCE: CategoriesRepository;

  constructor() {
    // this.categories = [];
    this.repository = getRepository(Category)
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();

  //   }
  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    // const category = new Category();

    // Object.assign(category, {
    //   name,
    //   description,
    //   created_at: new Date()
    // })
    // this.categories.push(category);

    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    // return this.categories;
    const categories = await this.repository.find()
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    //percorrer nossso array e procurar alguma condição
    // const category = this.categories.find(category => category.name === name);
    //parte 2 - banco de dados
    //Select * from categories where name = "name" limit 1
    const category = await this.repository.findOne({ name });
    return category;





  }

}

export { CategoriesRepository }