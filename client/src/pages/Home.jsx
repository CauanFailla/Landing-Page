import Header from "../sections/Header"
import Hero from "../sections/Hero"
import SocialProof from "../sections/SocialProof"
import Services from "../sections/Services"

export default function Home() {
    return (
        <div className="min-h-screen relative bg-bg h-[1500px]">
            <Header/>
            <main className="px-5">
                <Hero/>
                <SocialProof/>
                <Services/>
            </main>
        </div>
    )
}