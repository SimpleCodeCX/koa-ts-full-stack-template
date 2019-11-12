import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Welcome to koa-ts-full-stack-template nodejs api!'
  });
});

export default router;
