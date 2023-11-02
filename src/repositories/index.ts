import { ICreateUserDto, IUserDto } from "../dto/user";

export interface IUserRepository {
  create(user: ICreateUserDto): Promise<IUser>;
}

export interface IUser {
  id: String;
  username: string;
  name: string;
  registeredAt: Date;
}
