import connectDB from "../dataBase/connection.js";
import categoriesRouter from "./modules/category/category.router.js";
import productsRouter from "./modules/product/product.router.js";
import cors from "cors";
const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use(cors());
  app.get("/", (req, res) => {
    return res.status(200).json({ message: "success" });
  });

  app.use("/categories", categoriesRouter);
  app.use("/products", productsRouter);

  app.use("*", (req, res) => {
    return res.status(404).json({ message: "page not found" });
  });
};

export default initApp;
