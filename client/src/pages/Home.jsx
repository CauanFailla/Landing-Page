import Header from "../sections/Header"
import Hero from "../sections/Hero"
import SocialProof from "../sections/SocialProof"
import Services from "../sections/Services"
import Process from "../sections/Process"

export default function Home() {
    return (
        <div className="min-h-screen relative bg-bg">
            <Header/>
            <main className="px-5">
                <Hero/>
                <SocialProof/>
                <Services/>
                <Process/>
            </main>
        </div>
    )
}