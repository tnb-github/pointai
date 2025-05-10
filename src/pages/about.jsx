import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'


function About() {

  return (
    <>
    <div class="bg-primary">
      <Header/>
      <section>
        <div
            class="container lg:pt-40 md:pt-36 pt-32 lg:pb-[80px] md:pb-[60px] pb-[45px] border-b-[1px] border-solid border-black text-center">
            <div class="flex flex-col items-center justify-center text-black lg:gap-7 gap-5" data-aos="zoom-in-up">
                <h2>Innovative Platform</h2>
                <div class="flex items-center md:justify-start justify-center">
                    <a href="/" class="linkhover">
                        <p>HOME</p>
                    </a>
                    <i class="fa-solid fa-diamond text-xs p-2"></i>
                    <p class="text-secondary">ABOUT US</p>
                </div>
            </div>
        </div>
        </section>
        <section class="lg:py-[100px] md:py-[70px] py-[50px]">
            <div class="container">
                <div class="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
                    <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center"
                        data-aos="fade-up">
                        <div class="flex items-center md:justify-start justify-center">
                            <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                            <h2>Who are we?</h2>
                        </div>
                        <h2 class="py-4"></h2>
                        <p class="xl:w-[93%] lg:w-[95%]">We are a team of dedicated people who  create the world's most realistic virtual try-on 
                            room to enable online  customers to try-on apparel, jewellery, and makeup before buying, allows fashion businesses to 
                            provide a remarkable customer experience,  increase engagement, decrease the number of returned products.  </p>
                        
                        <div class="lg:mt-14 md:mt-10 mt-6">
                            <h6 class="xl:w-[93%] lg:w-[95%] text-end">--- Nitin Vats (Founder & CEO)</h6>
                        </div>
                    </div>
                    <div class="w-full flex lg:justify-end justify-center">
                        <figure>
                            <img class="w-fit" src="./src/assets/images/about/ceo.png" alt="nitin_vats"
                                data-aos="zoom-in-up"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="flex lg:flex-row flex-col-reverse lg:gap-4 gap-6 lg:justify-between justify-center">
                    <div class="xl:w-[42%] lg:w-[40%] flex lg:justify-start justify-center">
                        <figure class="w-fit">
                            <img class="w-full" src="./src/assets/images/about/whyUs.png" alt="whyus" data-aos="zoom-in-up"/>
                        </figure>
                    </div>
                    <div class="xl:w-[58%] lg:w-[60%]">
                        <div class="flex lg:text-start text-center flex-col text-black lg:items-start items-center">
                            <div class="lg:pb-8 pb-6" data-aos="fade-up">
                                <div class="flex items-center lg:justify-start justify-center">
                                    <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                                    <h6>OUR VALUES</h6>
                                </div>
                                <h3 class="pt-4 md:pb-4 pb-3 xl:w-[85%]">What Sets Us Apart</h3>
                                <p class="xl:w-[85%]">Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div class="flex gap-6 flex-col">
                                <div class="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                                    data-aos="fade-up">
                                    <figure>
                                        <img class="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/about/innovation.png" alt="Innovation"/>
                                    </figure>
                                    <div class="flex flex-col gap-1">
                                        <h5 class="group-hover:text-secondary">Innovation</h5>
                                        <p class="lg:w-[65%]">Innovation is part of who we are. Our vision is vast, and our impact even greater.</p>
                                    </div>
                                </div>
                                <div class="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                                    data-aos="fade-up">
                                    <figure>
                                        <img class="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/about/confidence.png" alt="Confidence"/>
                                    </figure>
                                    <div class="flex flex-col gap-1">
                                        <h5 class="group-hover:text-secondary">Confidence</h5>
                                        <p class="lg:w-[65%]">We empower online shoppers and fashion brands with confidence.</p>
                                    </div>
                                </div>
                                <div class="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                                    data-aos="fade-up">
                                    <figure>
                                        <img class="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/about/convenience.png" alt="Convenience"/>
                                    </figure>
                                    <div class="flex flex-col gap-1">
                                        <h5 class="group-hover:text-secondary">Convenience</h5>
                                        <p class="lg:w-[65%]">We simplify shopping—making it more convenient, engaging, and enjoyable for 
                                            customers and businesses alike.</p>
                                    </div>
                                </div>
                                <div class="flex lg:gap-7 gap-5 lg:flex-row flex-col lg:items-start items-center md:px-0 px-3 group"
                                    data-aos="fade-up">
                                    <figure>
                                        <img class="w-12 pt-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/about/reality.png" alt="Reality"/>
                                    </figure>
                                    <div class="flex flex-col gap-1">
                                        <h5 class="group-hover:text-secondary">Reality</h5>
                                        <p class="lg:w-[65%]">We recreate the real-life shopping experience online with the most lifelike virtual try-on room.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="lg:py-[100px] md:py-[70px] py-[50px]">
            <div class="container">
                <div class="flex items-center justify-center text-center flex-col text-black" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>OUR MEDIA</h6>
                    </div>
                    <h2 class="pt-4 pb-11">Take a look at our Presence</h2>
                </div>
                <div class="flex w-full h-auto lg:flex-row flex-col lg:pb-[100px] md:pb-[70px] pb-[50px] lg:gap-0 gap-6">
                <div class="flex flex-col lg:w-1/2 h-auto lg:gap-0 gap-6">
                        <div class="flex h-full sm:flex-row flex-col lg:gap-0 gap-6">
                            <div class="relative group h-full w-full" data-aos="flip-left">
                                <figure class="h-full w-full">
                                    <img class="w-full h-full" src="./src/assets/images/index/sosv.jpg" alt="Tryndbuy in Chinaccelerator (SOSV)"/>
                                </figure>
                                <div
                                    class="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                                    <a href="https://www.livemint.com/news/business-of-life/fashion-ai-gets-a-booster-shot-from-pandemic-11607260509374.html" class="linkhover" target="_blank">
                                        <h4>Point AI on Live Mint</h4>
                                    </a>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt labore.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-full sm:flex-row flex-col lg:gap-0 gap-6">
                            <div class="relative group h-full w-full" data-aos="flip-left">
                                <figure class="h-full w-full">
                                    <img class="w-full h-full" src="./src/assets/images/index/TryBuyYourStory.jpg" alt="Tryndbuy on Yourstory"/>
                                </figure>
                                <div
                                    class="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                                    <a href="https://yourstory.com/2019/01/virtual-trial-room-tryndbuy-fashion?utm_pageloadtype=scroll" target="_blank">
                                        <h4>Point AI on YourStory</h4>
                                    </a>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt labore.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col lg:w-1/2 h-auto lg:gap-0 gap-6">
                        <div class="flex h-full sm:flex-row flex-col lg:gap-0 gap-6">
                            <div class="relative group h-full w-full" data-aos="flip-left">
                                <figure class="h-full w-full">
                                    <img class="w-full h-full" src="./src/assets/images/index/sosv.jpg" alt="Tryndbuy in Chinaccelerator (SOSV)"/>
                                </figure>
                                <div
                                    class="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                                    <a href="https://www.china-speakers-bureau.com/2020/02/24/why-an-indian-virtual-fitting-room-has-a-fit-in-china-william-bao-bean/" class="linkhover" target="_blank">
                                        <h4>Point AI in Chinaccelator</h4>
                                    </a>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt labore.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex h-full sm:flex-row flex-col lg:gap-0 gap-6">
                            <div class="relative group h-full w-full" data-aos="flip-left">
                                <figure class="h-full w-full">
                                    <img class="w-full h-full" src="./src/assets/images/index/TryBuyYourStory.jpg" alt="Tryndbuy on Yourstory"/>
                                </figure>
                                <div
                                    class="absolute md:bottom-8 bottom-4 left-[5%] flex flex-col justify-center p-6 bg-[#131B2699] backdrop-blur-[54px] w-[90%] transform -translate-y-1/2 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 text-primary">
                                    <a href="https://yourstory.com/2019/01/virtual-trial-room-tryndbuy-fashion?utm_pageloadtype=scroll" target="_blank">
                                        <h4>Point AI on YourStory</h4>
                                    </a>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt labore.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
      <Footer/>
      </>
  )
}

export default About
