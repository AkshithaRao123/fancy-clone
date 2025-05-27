import { FOOTER_VID_URL } from "../utils/constants";

const Footer = () => {
    return (
        <div className="w-screen flex flex-col">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-row p-20">
                    <p className="font-extralight text-sm pr-30">/PAGES</p>
                    <div className="flex flex-col px-10">
                        <h1 className="font-bold text-4xl">SUBSCRIPTION</h1>
                        <h1 className="font-bold text-4xl">SERVICES</h1>
                        <h1 className="font-bold text-4xl">PRICING</h1>
                        <h1 className="font-bold text-4xl">WORKS</h1>
                        <h1 className="font-bold text-4xl">ABOUT US</h1>
                        <h1 className="font-bold text-4xl">FAQ</h1>
                    </div>
                </div>
                <div className="flex flex-row p-20">
                    <p className="font-extralight text-sm pr-30">/SOCIAL</p>
                    <div className="flex flex-col px-10">
                        <h1 className="font-semibold text-2xl">INSTAGRAM</h1>
                        <h1 className="font-semibold text-2xl">FACEBOOK</h1>
                        <h1 className="font-semibold text-2xl">LINKEDIN</h1>
                        <h1 className="font-semibold text-2xl">TWITTER</h1>
                        <h1 className="font-semibold text-2xl">YOUTUBE</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between px-20">
                <p>© 2025 FANCY</p>
                <span>TERMS & CONDITIONS</span>
            </div>
            <div>
                <video className="h-screen md:h-auto aspect-video mt-0 -z-1" autoPlay muted playsInline>
                    <source src={FOOTER_VID_URL} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Footer
