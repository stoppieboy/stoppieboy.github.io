"use client"

import { useEffect, useState } from "react";

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="inline mr-1">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
)

const RepoIcon = () => (
    <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"/>
        <path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"/>
    </svg>
)

const Projects = ({ id }) => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepos = () => {
        setLoading(true)
        setError(null)
        fetch("/api/get-repos", { method: 'GET' })
            .then((res) => {
                if (!res.ok) throw new Error(`Server error: ${res.status}`)
                return res.json()
            })
            .then((r) => {
                const edges = r.data?.user?.pinnedItems?.edges
                if (!edges) throw new Error('No data returned')
                setRepos(edges)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message ?? 'Unknown error')
                setLoading(false)
            })
    }

    useEffect(() => { fetchRepos() }, []);
        
    return (
        <div id={id || "projects"} className='min-h-[100vh] font-bold flex justify-center items-center'>
            <div className="w-[80vw] max-w-screen-xl py-28">
                <h2 className="text-sm font-mono text-accent3 mb-6 tracking-widest uppercase select-none">// Projects</h2>
                {loading && (
                    <div className="grid grid-rows-6 min-[540px]:grid-rows-3 min-[540px]:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
                        {Array.from({length: 6}).map((_, i) => (
                            <div key={i} className="flex flex-col p-6 m-2 border rounded-lg bg-gray-800 border-gray-700 animate-pulse h-36"/>
                        ))}
                    </div>
                )}
                {error && (
                    <div className="flex flex-col items-center gap-4 py-16 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <p className="text-gray-400 text-lg font-normal">Could not load projects.</p>
                        <p className="text-gray-600 text-sm font-normal">{error}</p>
                        <button
                            onClick={fetchRepos}
                            className="mt-2 px-5 py-2 text-sm font-semibold border border-gray-600 text-primary2 rounded-lg hover:border-accent3 hover:text-accent3 transition-colors duration-150"
                        >
                            Try again
                        </button>
                    </div>
                )}
                {!loading && !error && (
                    <div className="grid grid-rows-6 min-[540px]:grid-rows-3 min-[540px]:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
                    {repos.map((repo) => (
                        <div key={repo.node.id} className="flex flex-col p-6 m-2 border rounded-lg shadow bg-black border-gray-700 hover:bg-gray-900 transition-colors duration-200">
                            <h5 className="mb-2 text-xl font-bold text-primary2 flex items-center gap-2">
                                <RepoIcon/>
                                <span className="truncate">{repo.node.name}</span>
                            </h5>
                            <p className="font-normal text-gray-400 w-full truncate-box mb-3 text-left text-sm">{repo.node.description}</p>
                            <div className="flex items-center justify-between mt-auto font-medium text-gray-400 text-sm">
                                <div className="flex items-center gap-3">
                                    {repo.node.primaryLanguage && (
                                        <span className="flex items-center gap-1">
                                            <span style={{backgroundColor: repo.node.primaryLanguage.color}} className="inline-block w-3 h-3 rounded-full"/>
                                            {repo.node.primaryLanguage.name}
                                        </span>
                                    )}
                                    {repo.node.stargazerCount > 0 && (
                                        <span className="flex items-center text-yellow-500/70">
                                            <StarIcon/>{repo.node.stargazerCount}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 text-xs">
                                    {repo.node.homepageUrl && (
                                        <a href={repo.node.homepageUrl} target="_blank" rel="noopener noreferrer" className="text-accent3/80 hover:text-accent3 border border-accent3/30 hover:border-accent3/60 px-2 py-0.5 rounded transition-colors">Live</a>
                                    )}
                                    <a href={repo.node.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary2 border border-gray-700 hover:border-gray-500 px-2 py-0.5 rounded transition-colors">Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects