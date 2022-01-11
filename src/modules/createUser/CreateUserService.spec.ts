import { User } from "../../entities/User";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../repositories/IUsersRepositories";
import { CreateUserService } from "./CreateUserService";


describe("Create user", () => {

  let usersRepository: IUsersRepository;
  let createUserService: CreateUserService

  beforeAll(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });

  it("Should be able to create a new user", async () => {

    const userData: User = {
      name: "Teste name",
      email: "teste@teste.com",
      username: "testeusername"
    };

    const user = await createUserService.execute(userData);

    expect(user).toHaveProperty("id");
    expect(user.email).toBe("teste@teste.com");
    
  });

  it("Should not be able to create an existing user", async () => {

    const userData: User = {
      name: "Test Existing name",
      email: "testexisting@teste.com",
      username: "testexisting"
    };

    await createUserService.execute(userData);

    await expect(createUserService.execute(userData)).rejects.toEqual(
      new Error("User already exists!")
    );
  });
});