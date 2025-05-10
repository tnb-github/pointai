import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'


function Products() {

  return (
    <>
        <div  class="bg-primary">
        <Header/>
            <section>
                    <div class="container lg:pt-40 md:pt-36 pt-32 lg:pb-[80px] md:pb-[60px] pb-[45px] border-b-[1px] border-solid border-black text-center">
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
                    <div class="flex flex-row gap-7 pt-10">
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-7 pt-10">
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            {/* <figure>
                                <img class="rounded-full md:w-16 w-[90px]" src="./src/assets/images/index/patents.png"
                                    alt="patents"/>
                            </figure> */}
                            <div class="flex lg:py-6 py-6 gap-2">
                                <h6>Apparel Try-on</h6>
                            </div>
                        </div>
                    </div>
        </section>

        </div>
        <Footer/>
    </>
  )
}

export default Products
