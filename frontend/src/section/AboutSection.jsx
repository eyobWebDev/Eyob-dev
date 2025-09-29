import portifolioImage from "../assets/images/portifolioImage.png"
export default function AboutSection(){

    return <>
    <div id="about" className="p-4 mb-3">
        <div className="mt-20 text-4xl font-bold justify-center flex gap-3 mb-20"><div className="opacity-90">About</div><div className="text-gradient"> Me</div></div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-15 md:gap-15 sm:gap-10">
            <div className="w-100 h-100 shadow-lg relative">
                <img className="absolute w-full h-full object-cover" alt="Developer img" src={portifolioImage}/>
            </div>

            <div className="w-full text-[16px] mt-10 flex flex-col gap-5">
                <div className="opacity-80">Hi, I’m Eyob Tilahun, a passionate Full-Stack Developer who loves building clean, user-friendly, and scalable applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy turning complex problems into simple, elegant solutions.
            </div>

                <div className="opacity-80">Over the past projects, I’ve worked on:
                    <br />
                    💬 Real-time applications (chat apps with Socket.IO)
                    <br />
                    ✅ Task & project management tools
                    <br />
                    🎨 Interactive UIs with modern libraries like TailwindCSS, ShadCN, and Framer Motion.</div>

                <div className="opacity-80">When I’m not coding, I’m exploring new tech trends, refining my UI/UX design skills, or collaborating on exciting projects that push my creativity and problem-solving skills.
                    <br />

                My goal is to keep growing as a developer while building products that make a real impact. 🚀</div>
            </div>
        </div>

    </div>
    </>
}