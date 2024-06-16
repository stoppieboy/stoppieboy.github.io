"use client"

import { useEffect, useState } from "react";

const Projects = () => {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const getRepos = async() => {
            // console.log(process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN)
            const result = await fetch("/api/get-repos", {
                method: 'GET',
            })
            return result.json()
        }
        getRepos().then((r) => {
            setRepos(r.data.user.pinnedItems.edges)
        })
    },[]);
        
    return (
        <div className='h-[100vh] font-bold flex justify-center items-center'>
            <div className="flex flex-wrap justify-center">
            {repos && repos.map((repo) => (
                // <div className="w-80 bg-">{repo.name}</div>
                <a href={repo.node.url} target="_blank" key={repo.node.id} style={{flexBasis:"33.333%"}} className="flex flex-col max-w-sm p-6 m-2 h-48 border rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary2"><img className="inline mr-2" width="24" height="24" src="https://img.icons8.com/windows/32/E7E5E4/repository.png" alt="repository"/>{repo.node.name}</h5>
                    <p className="font-normal text-gray-400 w-full max-h-20 overflow-y-hidden text-left">{repo.node.description}</p>
                    <div className="flex items-end flex-grow font-medium text-gray-400 w-80"><div><div style={{backgroundColor: `${repo.node.primaryLanguage.color}`}} className="inline-block mr-2 w-3 h-3 rounded-full"></div>{repo.node.primaryLanguage.name}</div></div>
                </a>
            ))}
            {/* <object className="bg-black" type="image/svg+xml" data="https://gh-card.dev/repos/stoppieboy/promptopia.svg?fullname=&link_target=_blank"></object> */}
            </div>
        </div>
    )
}

export default Projects