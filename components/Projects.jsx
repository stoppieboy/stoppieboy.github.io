"use client"

import { useEffect, useState } from "react";

const RepoIcon = () => (
    // <svg className="inline mr-2 align-text-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
    //     <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
    // </svg>
    <svg className="inline mr-2 align-text-bottom" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"/>
        <path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"/>
    </svg>
)

const Projects = ({ id }) => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getRepos = async() => {
            const result = await fetch("/api/get-repos", { method: 'GET' })
            return result.json()
        }
        getRepos()
            .then((r) => {
                setRepos(r.data?.user?.pinnedItems?.edges ?? [])
                setLoading(false)
            })
            .catch(() => {
                setError(true)
                setLoading(false)
            })
    },[]);
        
    return (
        <div id={id || "projects"} className='min-h-[100vh] font-bold flex justify-center items-center'>
            {loading && (
                <div className="grid px-6 grid-rows-6 min-[540px]:px-0 min-[540px]:grid-rows-3 min-[540px]:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 max-w-screen-xl">
                    {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="flex flex-col p-6 m-2 border rounded-lg bg-gray-800 border-gray-700 animate-pulse h-36 lg:min-w-[300px]"/>
                    ))}
                </div>
            )}
            {error && (
                <p className="text-gray-400 text-xl font-normal">Could not load projects. Please try again later.</p>
            )}
            {!loading && !error && (
                <div className="grid px-6 grid-rows-6 min-[540px]:px-0 min-[540px]:grid-rows-3 min-[540px]:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 max-w-screen-xl">
                {repos.map((repo) => (
                    <a href={repo.node.url} target="_blank" rel="noopener noreferrer" key={repo.node.id} className="flex flex-col p-6 m-2 border rounded-lg shadow bg-black border-gray-700 hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold text-primary2 flex items-center"><RepoIcon/><span className="truncate">{repo.node.name}</span></h5>
                        <p className="font-normal text-gray-400 w-full truncate-box mb-2 text-left">{repo.node.description}</p>
                        <div className="flex items-end flex-grow font-medium text-gray-400">
                            <div>
                                <div style={{backgroundColor: `${repo.node.primaryLanguage?.color}`}} className="inline-block mr-2 w-3 h-3 rounded-full"/>
                                {repo.node.primaryLanguage?.name}
                            </div>
                        </div>
                    </a>
                ))}
                </div>
            )}
        </div>
    )
}

export default Projects