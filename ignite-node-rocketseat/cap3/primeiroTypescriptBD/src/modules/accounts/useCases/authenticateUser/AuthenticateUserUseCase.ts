import { compare } from "bcrypt";
import { sign } from "crypto";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}







@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    //Usuario existente
    const user = await this.usersRepository.findByEmail(email);


    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    //senha está correta
    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, "cdfeeafdfefswef", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user,
      token,
    }


  }
}

export { AuthenticateUserUseCase }