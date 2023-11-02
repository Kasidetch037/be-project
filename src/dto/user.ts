export interface IUserDto {
  id: String;
  username: string;
  name: string;
  registeredAt: string;
}

//extends Pick<IUserDto, 'name'|"username">
export interface ICreateUserDto {
  username: string;
  name: string;
  password: string;
}
