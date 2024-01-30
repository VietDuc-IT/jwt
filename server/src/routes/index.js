//import userRouter from "./user";
import authRouter from "./auth";

function route(app) {
  //app.use("/use", userRouter);
  app.use("/auth", authRouter);
}

export default route;
