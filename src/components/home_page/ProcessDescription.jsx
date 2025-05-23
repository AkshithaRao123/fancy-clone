import { useEffect } from "react";
import { processObserver } from "../../utils/intersectionObserver";


const ProcessDescription = () => {
    useEffect(() => {
            document.querySelectorAll("body").forEach((section) => {
                processObserver.observe(section);
            });
        }, []);

    return (
        <div className="w-2/3 px-20">
            <div id="process" className="border-l-4 pl-15 movingBorder">
                <div className="pb-10">
                    <h1 className="font-bold text-6xl">Start Subscription</h1>
                    <p className="font-semibold text-2xl py-5">Just book a call</p>
                </div>
                <div className="pb-10">
                    <h1 className="font-bold text-6xl">Describe the task</h1>
                    <p className="font-semibold text-2xl py-5">Tell us what you need</p>
                </div>
                <div>
                    <h1 className="font-bold text-6xl">Get Designs</h1>
                    <p className="font-semibold text-2xl pt-5">Start receiving drafts in 48 hrs</p>
                </div>
            </div>
        </div>
    )
}

export default ProcessDescription
