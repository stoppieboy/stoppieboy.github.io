import Image from "next/image"
import profilepic from "../public/assets/images/user_img_bw.jpg"

const About = ({ id, data }) => {
    return (
        <div id={id || "about"} className='h-[100vh] flex flex-col sm:flex-row items-center max-sm:space-y-10 sm:space-x-5 md:space-x-10 lg:space-x-24 xl:space-x-36 [ md:px-12 lg:px-24 xl:px-36 ] [ max-[450px]:text-xl text-2xl sm:text-3xl lg:text-4xl ]'>

            <Image src="/assets/images/user_img_bw.jpg" width={250} height={0} alt="Shivam's Picture" className='rounded-3xl'/>
            {/* <Image src={profilepic} alt="Shivam's Picture" width={250} className='rounded-3xl'/> */}

            <div className='flex-grow'> 
                <p className=' px-5 sm:font-medium text-center sm:text-start'>{data.about_text}</p>
            </div>

        </div>
    )
}

export default About