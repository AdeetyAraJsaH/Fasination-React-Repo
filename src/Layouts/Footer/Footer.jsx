import React from 'react'
import { AiOutlineCopyrightCircle, AiOutlineGlobal } from 'react-icons/ai'
import './footer.css'

function Footer() {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => {
            const isMobileSize = window.matchMedia('(max-width: 768px)').matches;
            setIsMobile(isMobileSize);
        };

        // Initial check
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])
    return (
        <div style={{ borderTop: "solid 1px", borderColor: 'grey' }} className='m-10'>
            <div style={{ color: 'grey' }} className='footer-menu flex md:flex-row flex-col text-sm py-2'>
                {isMobile ? <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-md font-medium">Resources</div>
                        <div className="collapse-content">
                            <ul className='flex flex-col gap-1'>
                                <li><span>Find a Store</span></li>
                                <li><span>Become a member</span></li>
                                <li><span>Send us a feedback</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-md font-medium">Help</div>
                        <div className="collapse-content">
                            <ul className='flex flex-col gap-1'>
                                <li><span>Get Help</span></li>
                                <li><span>Order Status</span></li>
                                <li><span>Delivery</span></li>
                                <li><span>Returns</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b">
                        <input type="checkbox" name="my-accordion-4" />
                        <div className="collapse-title text-md font-medium">Company</div>
                        <div className="collapse-content">
                            <ul className=''>
                                <li><span>About FasiNation</span></li>
                                <li><span>News</span></li>
                                <li><span>Careers</span></li>
                                <li><span>Inverstors</span></li>
                                <li><span>Sustainability</span></li>
                            </ul>
                        </div>
                    </div>
                </div> :
                    <>
                        <div className='md:basis-1/6'><span className='text-black font-medium block my-2'>Resources</span>
                            <ul>
                                <li><span>Find a Store</span></li>
                                <li><span>Become a member</span></li>
                                <li><span>Send us a feedback</span></li>
                            </ul>
                        </div>
                        <div className='md:basis-1/6'><span className='text-black font-medium block my-2'>Help</span>
                            <ul>
                                <li><span>Get Help</span></li>
                                <li><span>Order Status</span></li>
                                <li><span>Delivery</span></li>
                                <li><span>Returns</span></li>
                            </ul>
                        </div>
                        <div className='md:basis-1/6'><span className='text-black font-medium block my-2'>Company</span>
                            <ul className=''>
                                <li><span>About FasiNation</span></li>
                                <li><span>News</span></li>
                                <li><span>Careers</span></li>
                                <li><span>Inverstors</span></li>
                                <li><span>Sustainability</span></li>
                            </ul>
                        </div>
                        <div style={{ color: 'grey' }} className='h-fit basis-3/6 gap-2 inline-flex md:justify-end md:my-2 mt-10'><div className=' gap-2 inline-flex cursor-pointer'><AiOutlineGlobal className='inline' size={25} color='grey' /><button className='inline'>India</button></div></div>
                    </>}
            </div>
            <div style={{ color: 'grey' }} className='footer-footer my-10 text-sm'>
                <ul className='flex gap-2 md:gap-8 flex-col md:flex-row'>
                    <li><AiOutlineCopyrightCircle className='inline pb-1' /> 2024 FasiNation, Inc. All rights reserved</li>
                    <li><a href="#">Guides</a></li>
                    <li><a href="#">Terms of Sale</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">FasiNation Privacy Policy</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer