import HomePage from "@/components/Home"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { kv } from "@vercel/kv"

export default async function Home() {

  // for local development
  // const data = JSON.parse(await fs.readFile(process.cwd()+'/data.json', 'utf8'));

  //for production
  var data = {}
  try{
    const about_text = await kv.get('about_text');
    const email = await kv.get('email');
    data = {about_text: about_text, email: email}
  }catch(e){
    console.log(e)
  }

  return (
    <main className="page-container items-center">

      {/* Home */}
      <HomePage id="home"/>

      {/* About */}
      <About id="about" data={data}/>

      {/* Experience */}
      {/* <div id="experience">
        <Experience/>
      </div> */}

      {/* Projects */}
      <Projects id="projects"/>

      {/* Contact */}
      <Contact id="contact" mail={data.email}/>

    </main>
  )
}
