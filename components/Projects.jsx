"use client"

import { useEffect, useState } from "react";

const Projects = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
    //     console.log('hi')
    //     const octokit = new Octokit({auth: process.env.GITHUB_ACCESS_TOKEN})
    //     const getRepos = async() => {
    //         return await octokit.request("GET /users/{username}/repos", {
    //           username: "stoppieboy"
    //         })
    //     }
    //     getRepos().then((r) => {
    //         console.log(r)
    //         setRepos(r.data.slice(0,6))
    //     });
    //     console.log('bye')


        const getRepos = async() => {
            // console.log(process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN)
            const result = await fetch("/api/get-repos", {
                method: 'GET',
                next: {
                    revalidate: 0
                }
            })
            return result.json()
        }
        getRepos().then((r) => {
            console.log(r);
            setRepos(r.data.user.pinnedItems.edges)
        })
    },[]);
        
    return (
        <div className=' font-bold flex flex-wrap justify-center'>
            {repos && repos.map((repo) => (
                // <div className="w-80 bg-">{repo.name}</div>
                <a href={repo.node.url} target="_blank" key={repo.node.id} style={{flexBasis:"33.333%"}} className="block max-w-sm p-6 m-2 h-48 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-primary2"><img className="inline mr-2" width="24" height="24" src="https://img.icons8.com/windows/32/E7E5E4/repository.png" alt="repository"/>{repo.node.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 w-full max-h-20 overflow-hidden overflow-ellipsis overflow-y-clip text-left">{repo.node.description}</p>
                    <div className="font-medium text-gray-700 dark:text-gray-400 w-80"><div style={{backgroundColor: `${repo.node.languages.edges[0].node.color}`}}className="inline-block mr-2 w-3 h-3 rounded-full"></div>{repo.node.languages.edges[0].node.name}</div>
                </a>
            ))}
            {/* <object className="bg-black" type="image/svg+xml" data="https://gh-card.dev/repos/stoppieboy/promptopia.svg?fullname=&link_target=_blank"></object> */}
        </div>
    )
}

export default Projects