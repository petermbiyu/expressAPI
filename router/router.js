import express from "express";
import { queryRoute } from "../controller/queryRoute.js";
import { paramRoute } from "../controller/paramRoute.js";

export const apiRouter = express.Router();

apiRouter.get("/", queryRoute);
apiRouter.get("/:field/:term", paramRoute);
