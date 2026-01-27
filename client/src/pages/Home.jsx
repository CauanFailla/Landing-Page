import Header from "../sections/Header"
import Hero from "../sections/Hero"
import SocialProof from "../sections/SocialProof"

export default function Home() {
    return (
        <div className="min-h-screen bg-bg h-[1000px]">
            <Header/>
            <main className="px-5">
                <Hero/>
                <SocialProof/>
            </main>
        </div>
    )
}