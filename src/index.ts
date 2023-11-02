import { PrismaClient } from "@prisma/client";
import express from "express";
import { IUserHandler } from "./handlers";
import UserHandler from "./handlers/user";
import { IUserRepository } from "./repositories";
import UserRepository from "./repositories/user";

const PORT = Number(process.env.PORT || 8888);
const app = express();
const clnt = new PrismaClient();

const userRepo: IUserRepository = new UserRepository(clnt);

const userHandler: IUserHandler = new UserHandler(userRepo);

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to LearnHub").end();
});

const userRouter = express.Router();

app.use("/user", userRouter);

userRouter.post("/", userHandler.registration);

app.listen(PORT, () => {
  console.log(`LearnHub API is up at ${PORT}`);
});
