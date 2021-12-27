import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckx60a5vu4x3701w86e3y7a3u/master",
  cache: new InMemoryCache(),
});

export default client;
