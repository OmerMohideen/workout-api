import Router from "koa-router";
import path from "path";
import { StatusCodes } from "http-status-codes";
const router = new Router();
import cors from "@koa/cors";
import selectWorkouts from "../workouts";

router.get(
  `/${path.basename(__filename, path.extname(__filename))}`, cors(),
  async (ctx) => {
    const {
      query: { amount },
    } = ctx.request;
    if (amount !== undefined && Number.isInteger(parseInt(amount.toString()))) {
      ctx.response.status = StatusCodes.OK;
      let a = parseInt(amount.toString());
      if (a > 10) a = 10; 
      ctx.body = selectWorkouts(a);
      return;
    }
    ctx.response.status = StatusCodes.OK;
    ctx.body = selectWorkouts(8);
  }
);

export default router.routes();