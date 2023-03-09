

export default function PricePlaningComponent() {

    return (
        <div className="mt-10 flex bg-typo lg:flex-row flex-col-reverse items-end justify-center mx-auto container px-4  xl:px-10 2xl:px-4 relative z-20 gap-x-[32px]">
            <article className="relative scaleIt rounded-xl  2xl:px-7 lg:px-5 md:px-8 px-5 2xl:py-7 lg:py-6 md:py-8 py-5 cursor-pointer border  pricingCardDark border-gray-200 dark:border-gray-700 lg:mt-0 mt-6 lg:w-[355px] xl:w-[395px] w-full" aria-label="community center">

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between w-full">
                                <div className=" items-center lg:hidden md:flex hidden">
                                    <p className="sm:text-3xl text-xl  font-semibold leading-6   dark:text-white text-gray-800">FREE</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm font-light leading-[14px] sm:mt-3 mt-1 text-darkGray">Test drive TUK</p>
                        <div className=" items-center mt-6 lg:flex md:hidden flex">
                            <p className="sm:text-3xl text-xl  font-semibold leading-6   dark:text-white text-green-500">FREE</p></div>
                        <div className="flex items-end justify-between">
                            <div className="sm:mt-7 mt-5  dark:text-white text-gray-800">
                                <div className="flex items-center">
                                    <div>
                                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.10059C0 2.79209 2.6915 0.100586 6 0.100586C9.3085 0.100586 12 2.79209 12 6.10059C12 9.40909 9.3085 12.1006 6 12.1006C2.6915 12.1006 0 9.40909 0 6.10059ZM5.791 8.07909L9.041 4.82909C9.2365 4.63359 9.2365 4.31759 9.041 4.12209C8.8455 3.92659 8.5295 3.92659 8.334 4.12209L5.4375 7.01859L4.166 5.74709C3.9705 5.55159 3.6545 5.55159 3.459 5.74709C3.2635 5.94259 3.2635 6.25859 3.459 6.45409L5.084 8.07909C5.1815 8.17659 5.3095 8.22559 5.4375 8.22559C5.5655 8.22559 5.6935 8.17659 5.791 8.07909Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <p className="text-sm  leading-[14px]  ml-2.5">For 1 developer</p>
                                </div><div className="flex items-start mt-5"><div>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.10059C0 2.79209 2.6915 0.100586 6 0.100586C9.3085 0.100586 12 2.79209 12 6.10059C12 9.40909 9.3085 12.1006 6 12.1006C2.6915 12.1006 0 9.40909 0 6.10059ZM5.791 8.07909L9.041 4.82909C9.2365 4.63359 9.2365 4.31759 9.041 4.12209C8.8455 3.92659 8.5295 3.92659 8.334 4.12209L5.4375 7.01859L4.166 5.74709C3.9705 5.55159 3.6545 5.55159 3.459 5.74709C3.2635 5.94259 3.2635 6.25859 3.459 6.45409L5.084 8.07909C5.1815 8.17659 5.3095 8.22559 5.4375 8.22559C5.5655 8.22559 5.6935 8.17659 5.791 8.07909Z" fill="currentColor"></path></svg>
                                </div>
                                    <p className="text-sm  leading-[14px]  ml-2.5">250 free components</p>
                                </div><div className="flex items-center mt-5"><div>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.10059C0 2.79209 2.6915 0.100586 6 0.100586C9.3085 0.100586 12 2.79209 12 6.10059C12 9.40909 9.3085 12.1006 6 12.1006C2.6915 12.1006 0 9.40909 0 6.10059ZM5.791 8.07909L9.041 4.82909C9.2365 4.63359 9.2365 4.31759 9.041 4.12209C8.8455 3.92659 8.5295 3.92659 8.334 4.12209L5.4375 7.01859L4.166 5.74709C3.9705 5.55159 3.6545 5.55159 3.459 5.74709C3.2635 5.94259 3.2635 6.25859 3.459 6.45409L5.084 8.07909C5.1815 8.17659 5.3095 8.22559 5.4375 8.22559C5.5655 8.22559 5.6935 8.17659 5.791 8.07909Z" fill="currentColor"></path></svg>
                                </div>
                                    <p className="text-sm  leading-[14px]  ml-2.5">Community support</p></div>
                                <div className="flex items-center mt-5"><div>
                                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.10059C0 2.79209 2.6915 0.100586 6 0.100586C9.3085 0.100586 12 2.79209 12 6.10059C12 9.40909 9.3085 12.1006 6 12.1006C2.6915 12.1006 0 9.40909 0 6.10059ZM5.791 8.07909L9.041 4.82909C9.2365 4.63359 9.2365 4.31759 9.041 4.12209C8.8455 3.92659 8.5295 3.92659 8.334 4.12209L5.4375 7.01859L4.166 5.74709C3.9705 5.55159 3.6545 5.55159 3.459 5.74709C3.2635 5.94259 3.2635 6.25859 3.459 6.45409L5.084 8.07909C5.1815 8.17659 5.3095 8.22559 5.4375 8.22559C5.5655 8.22559 5.6935 8.17659 5.791 8.07909Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                    <p className="text-sm  leading-[14px]  ml-2.5">Lifetime access</p>
                                </div>
                                <div className="flex items-center mt-5"><div><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.10059C0 2.79209 2.6915 0.100586 6 0.100586C9.3085 0.100586 12 2.79209 12 6.10059C12 9.40909 9.3085 12.1006 6 12.1006C2.6915 12.1006 0 9.40909 0 6.10059ZM5.791 8.07909L9.041 4.82909C9.2365 4.63359 9.2365 4.31759 9.041 4.12209C8.8455 3.92659 8.5295 3.92659 8.334 4.12209L5.4375 7.01859L4.166 5.74709C3.9705 5.55159 3.6545 5.55159 3.459 5.74709C3.2635 5.94259 3.2635 6.25859 3.459 6.45409L5.084 8.07909C5.1815 8.17659 5.3095 8.22559 5.4375 8.22559C5.5655 8.22559 5.6935 8.17659 5.791 8.07909Z" fill="currentColor"></path>
                                </svg>
                                </div><p className="text-sm  leading-[14px]  ml-2.5">Use on unlimited projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:mt-7 mt-8"><button className="selectBtnBg relative z-20 rounded-md w-full text-base  font-medium leading-4 py-5 text-center text-gray-800 dark:text-white uppercase flex items-center justify-center gap-x-2">GET 250<span className="md:block hidden">COMMUNITY</span> COMPONENTS</button></div>
                </div>
            </article>
        </div>
    )
}