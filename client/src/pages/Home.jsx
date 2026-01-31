import Header from "../sections/Header"
import Hero from "../sections/Hero"
import SocialProof from "../sections/SocialProof"
import Services from "../sections/Services"
import Process from "../sections/Process"
import FAQs from "../sections/FAQs"
import Footer from "../sections/Footer"
import Contact from "../sections/Contact"
import WhyUs from "../sections/WhyUs"

export default function Home() {
    return (
        <div className="min-h-screen relative bg-bg">
            <Header/>
            <main className="px-5">
                <Hero/>
                <SocialProof/>
                <Services/>
                <WhyUs/>
                <Process/>
                <FAQs/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}