import Image from "next/image"
import Link from "next/link"

const SocialLinks = () => {

    const links = [
        {name: "github", href: "https://github.com/stoppieboy"},
        {name: "hackerrank", href: "https://www.hackerrank.com/profile/CS_shivam30590"},
        {name: "linkedin", href: "https://linkedin.com/in/shivam3004"}
    ]

    const SIZE = 30;

    return (
        // <div className="absolute bottom-10 flex p-3 gap-4 border-[3px] border-white rounded-3xl bg-black">
        //     {links && links.map((link, idx) => (
        //         <Link key={idx} href={link.href} target="_blank"><Image src={`/assets/icons/${link.name}.svg`} alt={`${link.name} icon`} width={SIZE} height={SIZE}/></Link>
        //     ))}
        // </div>

        <div className="absolute right-10 bottom-10 flex flex-col p-3 gap-8 rounded-3xl">
            {links && links.map((link, idx) => (
                <Link key={idx} href={link.href} target="_blank"><Image src={`/assets/icons/${link.name}.svg`} alt={`${link.name} icon`} width={SIZE} height={SIZE}/></Link>
            ))}
        </div>
    )
}

export default SocialLinks