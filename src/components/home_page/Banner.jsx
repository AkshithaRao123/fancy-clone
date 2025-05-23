import { awtest, clutch, css_design, producthunt, sortlist, trustpilot } from '../../assets/awards/award_imports'

const Banner = () => {
    return (
        <div className='w-4/9 absolute left-5/9 top-0 flex flex-col flex-wrap justify-center items-center h-screen'>
            <div className='bg-black p-10'>
                <h1 className='font-semibold text-8xl mb-5'>Design Subscription for Startups</h1>
                <h3 className='text-2xl font-semibold'>Your on-call design team that can deliver branding, websites, apps, and more!</h3>
            </div>
            <div className="bg-white w-full flex flex-row justify-center items-center overflow-hidden">
                <div className='flex flex-row justify-center items-center h-[5rem] marquee overflow-hidden'>
                    <div className='border border-r-gray-300'><img src={awtest} /></div>
                    <div className='border border-r-gray-300'><img src={clutch} /></div>
                    <div className='border border-r-gray-300'><img src={css_design} /></div>
                    <div className='border border-r-gray-300'><img src={producthunt} /></div>
                    <div className='border border-r-gray-300'><img src={sortlist} /></div>
                    <div className='border border-r-gray-300'><img src={trustpilot} /></div>
                </div>
            </div>
        </div>
    )
}

export default Banner

// marquee animation-(--marquee)