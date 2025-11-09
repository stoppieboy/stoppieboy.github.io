
const Experience = ({ id }) => {
  return (
    <div id={id || 'experience'} className='min-h-[100vh] text-7xl font-bold flex items-center'>
        {/* <h2 className="text-5xl">Experience</h2> */}
        <ExperienceList />
    </div>
  )
}

const ExperienceList = () => {
    return (
        <div className="text-xl h-[100%] flex flex-col space-y-6 w-[80vw] py-28">
            <ExperienceCard
                title="Software Engineer"
                company="Newgen Software Technologies Limited"
                duration="Jul 2025 - Present"
                description="• Developed and maintained backend utilities, API integrations, Servlets and server-side
validations using Enterprise Java (Jakarta EE); contributed to front-end validations using
JavaScript and ensured seamless functionality across modules."
            />
            <ExperienceCard
                title="Software Engineer Trainee"
                company="Newgen Software Technologies Limited"
                duration="Feb 2025 - Jun 2025"
                description="Collaborated with cross-functional teams to develop and maintain web applications."
            />
        </div>
    )
}

const ExperienceCard = ({ title, company, duration, description }) => {
    return (
        <div className="m-0 px-12 py-8 bg-black hover:bg-gray-700 border border-gray-700 rounded-lg">
            <h2 className="text-primary2 select-none"><span className="text-accent3 text-xl">{title}</span> - {company} ({duration})</h2>
            <p className="text-gray-400 select-none">{description}</p>
        </div>
    );
}

export default Experience