import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

export const fetchCache = "force-no-store"

export const GET = async(req, {params}) => {
    try{
        const client = getClient()
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
                                    primaryLanguage{
                                        name,
                                        color
                                    }
                                }
                            }
                        }
                    }
                }
            }`,
            fetchPolicy: "no-cache",
            context: {
                fetchOptions: {
                    next: { revalidate: 5 },
                },
            },
        })

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=1',
                'CDN-Cache-Control': 'public, s-maxage=60',
                'Vercel-CDN-Cache-Control': 'public, s-maxage=3600',
            },
        });
    }catch(err){
        console.log("server error: ",err)
        return new Response(JSON.stringify(err), {status: 404})
    }
}
