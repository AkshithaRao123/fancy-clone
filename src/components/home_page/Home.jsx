import Header from "./Header"
import ProcessDescription from "./ProcessDescription"
import { observer } from "../../utils/intersectionObserver"
import { useEffect } from "react"
import {ROCKET_VID} from "../../utils/constants"

const Home = () => {
    useEffect(() => {
        document.querySelectorAll("#slogan_move_up").forEach((section) => {
            observer.observe(section);
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="w-2/3 px-20 py-40">
                <h1 id="slogan_move_up" className="font-semibold text-8xl">Let's start right</h1>
                <h1 id="slogan_move_up" className="font-semibold text-8xl">now — it's</h1>
                <h1 id="slogan_move_up" className="font-semibold text-8xl">incredibly simple!</h1>
            </div>
            <ProcessDescription />
            {/* <div className="h-[300vh]"></div> */}
            <div>
                <div>
                    <h1>Subscription Benefits</h1>
                    <h2>How the subscription differs from the traditional way of interaction</h2>
                </div>
                <div>
                    <video src={ROCKET_VID} autoPlay loop muted className="h-[80vh]" />
                </div>
            </div>
        </div>
    )
}

export default Home
