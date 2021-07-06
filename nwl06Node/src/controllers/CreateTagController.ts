import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

class CreateTagController {

  async handle(request: Request, response: Response) {

    //faço essa destrutação do que tem dentro do request body, pra não ..
    // const data = request.body
    //data.name
    const { name } = request.body
    const createTagService = new CreateTagService();
    const tag = await createTagService.execute(name);

    return response.json(tag)
  }

}

export { CreateTagController }