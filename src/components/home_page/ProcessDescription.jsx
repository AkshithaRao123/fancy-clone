import { useEffect } from "react";
import { processObserver } from "../../utils/intersectionObserver";
import { ICECREAM_URL } from "../../utils/constants";


const ProcessDescription = () => {
    useEffect(() => {
        document.querySelectorAll("#process").forEach((section) => {
            processObserver.observe(section);
        });
    }, []);

    return (
        <div className="w-screen px-20 relative h-[3000vh] flex flex-row">
            <div className="w-2/3 sticky top-30 h-[100vh]">
                <div id="process" className="border-l-4 pl-15">
                    <div className="pb-10">
                        <h1 className="font-bold text-5xl">Start Subscription</h1>
                        <p className="font-semibold text-2xl py-5">Just book a call</p>
                    </div>
                    <div className="pb-10">
                        <h1 className="font-bold text-5xl">Describe the task</h1>
                        <p className="font-semibold text-2xl py-5">Tell us what you need</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-5xl">Get Designs</h1>
                        <p className="font-semibold text-2xl pt-5">Start receiving drafts in 48 hrs</p>
                    </div>
                </div>
                <div className="w-full flex flex-row px-20 py-10 justify-between">
                    <button className="w-1/2">
                        Book a call
                    </button>
                    <button className="w-2/5">
                        Price
                    </button>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <video src={ICECREAM_URL} autoPlay loop muted className="relative -top-120" />
            </div>
        </div>
    )
}

export default ProcessDescription
