import Router from "koa-router";
import path from "path";
import { StatusCodes } from "http-status-codes";
const router = new Router();
import cors from "@koa/cors";
import { workoutsMap } from "../workouts"

router.get(
  `/${path.basename(__filename, path.extname(__filename))}`, cors(),
  async (ctx) => {
    ctx.response.status = StatusCodes.OK;
    ctx.body = workoutsMap;
  }
);

export default router.routes();