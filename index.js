import { hello } from "./demo.js";
import { jformat } from "./jsonformat.js";
import Koa from "koa";
import Router from "koa-router";
import koaBody from "koa-body";
const app = new Koa();
const router = new Router();

app.use(koaBody());

router.get("/", (ctx, next) => {
    ctx.body = "Hello World!!";
});
router.get("/hoge", (ctx, next) => {
    ctx.body = "Hoge World!!";
});
router.get("/hello", async (ctx, next) => {
    ctx.body = await hello();
});
router.post("/jformat", async (ctx, next) => {
    const req = ctx.request.body;
    ctx.body = await jformat(req.json, req.path);
});

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

router.post("/hoge", async (ctx, next) => {
    console.log("hoge start");
    ctx.body = JSON.stringify(ctx.request.body);
    await sleep(5000);

    console.log(ctx.body);
    console.log("===========================");
    ctx.body = "hoge post!!";
});
router.get("/status", (ctx, next) => {
    ctx.response.status = 201;
    ctx.body = {
        aaa: "123",
        bbb: "987",
    };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
