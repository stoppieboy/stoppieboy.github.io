import data from "../data.json"

const Experience = ({ id }) => {
  return (
    <div id={id || 'experience'} className='min-h-[100vh] text-7xl font-bold flex items-center'>
        <ExperienceList />
    </div>
  )
}

const ExperienceList = () => {
    return (
        <div className="text-xl h-[100%] flex flex-col space-y-6 w-[80vw] py-28">
            {data.experience.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
            ))}
        </div>
    )
}

const ExperienceCard = ({ title, company, duration, description }) => {
    return (
        <div className="m-0 px-12 py-8 bg-black hover:bg-gray-700 border border-gray-700 rounded-lg">
            <h2 className="text-primary2 select-none"><span className="text-accent3 text-xl">{title}</span> - {company} ({duration})</h2>
            <ul className="list-disc list-inside text-gray-400 select-none mt-2 space-y-1">
                {description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    );
}

export default Experience