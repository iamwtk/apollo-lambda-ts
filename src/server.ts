import { ApolloServer } from "apollo-server-lambda";

import handleContext from "./auth/handleContext";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: handleContext
});

export default server;
