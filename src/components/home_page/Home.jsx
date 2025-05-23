import Header from "./Header"
import Navbar from "../Navbar"
import ProcessDescription from "./ProcessDescription"
import { observer } from "../../utils/intersectionObserver"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.querySelectorAll("#slogan_move_up").forEach((section) => {
            observer.observe(section);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Header />
            <div className="w-2/3 px-20 py-40">
                <h1 id="slogan_move_up" className="font-semibold text-8xl">Let's start right</h1>
                <h1 id="slogan_move_up" className="font-semibold text-8xl">now — it's</h1>
                <h1 id="slogan_move_up" className="font-semibold text-8xl">incredibly simple!</h1>
            </div>
            <ProcessDescription />
            <div className="h-[900px]">

            </div>
        </div>
    )
}

export default Home
