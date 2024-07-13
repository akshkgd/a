
import BlurFade from "@/components/magicui/blur-fade";
function App() {


  return (
    <>
     <BlurFade delay={0.5} inView>
      <section className="max-w-2xl mx-auto mt-12">
        <div className="flex gap-14 items-center">
          <div className="">
            <h1 className="text-4xl font-black">Hey! I am Ashish 👋</h1>
            <p className=" font-light text-lg mt-2">Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.</p>
          </div>
          <img className="h-36 w-36 rounded-full object-cover" src="https://www.ashishshukla.dev/assets/ashish-CxfPGvZq.jpg" alt="" />  
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-neutral-500 text-s font-light">At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, <span className="text-black underline">I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley</span> , and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called <span className="text-black underline">buildspace sf1.</span> </p>
        </div>
      </section>



      </BlurFade>
      vldkldkldfdfdfd
    </>
  )
}

export default App
