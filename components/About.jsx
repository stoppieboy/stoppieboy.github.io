import Image from "next/image"
import Skill from "./Skill"
import data from "../data.json"

const About = ({ id }) => {
    return (
        <div id={id || "about"} className='min-h-[100vh] flex flex-col sm:flex-row items-center max-sm:space-y-10 sm:space-x-5 md:space-x-10 lg:space-x-24 xl:space-x-16 [ md:px-12 lg:px-24 xl:px-36 ]'>

            <Image src="/assets/images/user_img.jpg" width={250} height={0} alt="Shivam's Picture" className='rounded-3xl flex-shrink-0'/>

            <div className='flex-grow px-5'>
                <h2 className="text-sm font-mono text-accent3 mb-4 tracking-widest uppercase select-none">// About me</h2>
                <p className='sm:font-medium text-center sm:text-start leading-[1.7] mb-8 text-lg'><Skill>Software Engineer</Skill> with 1+ year of experience in full-stack development and API design. Passionate about solving complex problems and building technology that delivers measurable value. Expertise in Java, JavaScript, Golang and frameworks like <Skill>React.js</Skill> and <Skill>Next.js</Skill>.</p>

                <div className="flex flex-col gap-4">
                    {data.skills.map(({ category, items }) => (
                        <div key={category}>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-mono">{category}</p>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span key={skill} className="text-sm px-3 py-1 rounded-full border border-gray-700 text-gray-300 hover:border-accent3/60 hover:text-accent3 transition-colors duration-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default About