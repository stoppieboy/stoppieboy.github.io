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
            {/* <div className="flex flex-wrap justify-center"> */}
            <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {repos && repos.map((repo) => (
                // <div className="w-80 bg-">{repo.name}</div>
                <a href={repo.node.url} target="_blank" key={repo.node.id} className="flex flex-col p-6 m-2 border rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold text-primary2 truncate"><img className="inline mr-2" width="24" height="24" src="https://img.icons8.com/windows/32/E7E5E4/repository.png" alt="repository"/>{repo.node.name}</h5>
                    <p className="font-normal text-gray-400 w-full truncate-box mb-2 text-left">{repo.node.description}</p>
                    <div className="flex items-end flex-grow font-medium text-gray-400"><div><div style={{backgroundColor: `${repo.node.primaryLanguage.color}`}} className="inline-block mr-2 w-3 h-3 rounded-full"></div>{repo.node.primaryLanguage.name}</div></div>
                </a>
            ))}
            {/* <object className="bg-black" type="image/svg+xml" data="https://gh-card.dev/repos/stoppieboy/promptopia.svg?fullname=&link_target=_blank"></object> */}
            </div>
        </div>
    )
}

export default Projects