import data from "../data.json"

const Experience = ({ id }) => {
  return (
    <div id={id || 'experience'} className='min-h-[100vh] font-bold flex items-center'>
        <div className="w-[80vw] py-28">
            <h2 className="text-sm font-mono text-accent3 mb-2 tracking-widest uppercase select-none">// Experience</h2>
            <ExperienceList />
        </div>
    </div>
  )
}

const ExperienceList = () => {
    return (
        <div className="text-xl flex flex-col space-y-6">
            {data.experience.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
            ))}
        </div>
    )
}

const ExperienceCard = ({ title, company, companyUrl, duration, description, tags }) => {
    return (
        <div className="px-8 py-6 bg-black hover:bg-gray-900 border border-gray-700 rounded-lg transition-colors duration-200">
            <div className="flex items-center gap-3 mb-1">
                <img
                    src={`https://www.google.com/s2/favicons?domain=${new URL(companyUrl).hostname}&sz=32`}
                    alt={`${company} logo`}
                    width={20}
                    height={20}
                    className="rounded-sm"
                />
                <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-gray-400 hover:text-primary2 transition-colors"
                >
                    {company}
                </a>
                <span className="text-gray-600 text-sm ml-auto">{duration}</span>
            </div>
            <h2 className="text-accent3 text-xl font-bold mb-3 select-none">{title}</h2>
            <ul className="list-disc list-inside text-gray-400 select-none space-y-1 text-base">
                {description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full border border-accent3/40 text-accent3/80">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Experience