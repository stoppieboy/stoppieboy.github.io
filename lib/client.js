import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from "@apollo/client/link/context";


export const { getClient } = registerApolloClient(() => {
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
                "Cache-Control": "no-cache",
            }
        }
    });
    return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(new HttpLink({
        uri: "https://api.github.com/graphql",
    })),
  });
});