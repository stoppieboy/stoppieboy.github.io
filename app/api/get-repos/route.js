import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const GET = async(req, {params}) => {
    try{

        const httpLink = createHttpLink({
            uri: "https://api.github.com/graphql",
        });

        const authLink = setContext((_, { headers }) => {
            return {
                headers: {
                    ...headers,
                    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
                }
            }
        });
        
        const client = new ApolloClient({
            link: authLink.concat(httpLink),
            cache: new InMemoryCache()
        });
    
        const result = await client.query({
            query:gql`
            {
                user(login:"stoppieboy") {
                    pinnedItems(first:6,types:REPOSITORY) {
                        edges {
                            cursor
                            node{
                                ... on Repository{
                                    id
                                    name
                                    url
                                    description
                                    languages(first:1){
                                        edges{
                                            node{
                                                color
                                                name
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }`
        })

        return new Response(JSON.stringify(result), {status: 200});
    }catch(err){
        console.log("server error: ",err)
    }
}
