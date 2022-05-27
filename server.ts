import { Application, Router } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import { applyGraphQL, GQLError } from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";
import { typeDefs } from "./typedefs.ts";
import { resolvers } from "./resolvers.ts";

const app = new Application();

// const router = new Router();

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: typeDefs,
  resolvers: resolvers,
  // do we need this?
  context: (ctx) => {
      // this line is for passing a user context for the auth
    return { user: "Aaron" };
  }
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

await app.listen({ port: 3000 });
