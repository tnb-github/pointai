import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'


function Contact() {

  return (
    <>
        <div class="bg-primary">
        <Header/>
        <section>
            <div
                class="container lg:pt-40 md:pt-36 pt-32 lg:pb-[80px] md:pb-[60px] pb-[45px] border-b-[1px] border-solid border-black text-center">
                <div class="flex flex-col items-center justify-center text-black lg:gap-7 gap-5" data-aos="zoom-in-up">
                    <h2>Stay Connected With Us</h2>
                    <div class="flex items-center md:justify-start justify-center">
                        <a href="/" class="linkhover">
                            <p>HOME</p>
                        </a>
                        <i class="fa-solid fa-diamond text-xs p-2"></i>
                        <p class="text-secondary">CONTACT US</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="lg:py-[100px] md:py-[70px] py-[50px]">
            <div class="container">
                <div class="flex items-center justify-center text-center flex-col text-black" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>OUR OFFICES</h6>
                    </div>
                    <h2 class="pt-4 pb-11">We are present Globally</h2>
                    <figure class="md:pb-[50px] pb-[50px]">
                        <img class="w-full" src="./src/assets/images/contact/map.png" alt="contactImg"
                            data-aos="zoom-in-up"/>
                    </figure>
                </div>
                <div class="flex lg:gap-7 gap-5 md:flex-row flex-col">
                    <div class="flex md:w-1/4">
                        <a href="#"
                            class="flex flex-col text-primary justify-center items-center text-center bg-background-primaryBg w-full border-[1px] border-solid border-[#717171] gap-4 lg:py-7 py-5 px-4 hover:bg-background-secondary hover:border-secondary"
                            data-aos="flip-left">
                            <figure
                                class="rounded-full w-[60px] h-[60px] flex justify-center items-center bg-white text-background-primaryBg text-2xl">
                                <img class="w-10 py-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/contact/delhi.png" alt="New Delhi"/>
                            </figure>
                            <div class="flex justify-center items-center text-center flex-col gap-3">
                                <h6>NEW DELHI</h6>
                                <div class="flex justify-center items-center text-center flex-col gap-1">
                                    <p>1614A-B, The Iconic Correnthum
                                        Tower, Sector 62, Opp.
                                        Electronic City Metro
                                        Station, Noida, INDIA 201309</p>
                                    <p>info@tryndbuy.com</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex md:w-1/4">
                        <a href="#"
                            class="flex flex-col text-primary justify-center items-center text-center bg-background-primaryBg w-full border-[1px] border-solid border-[#717171] gap-4 lg:py-7 py-5 px-4 hover:bg-background-secondary hover:border-secondary"
                            data-aos="flip-left">
                            <figure
                                class="rounded-full w-[60px] h-[60px] flex justify-center items-center bg-white text-background-primaryBg text-2xl">
                                <img class="w-10 py-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/contact/sanf.png" alt="San Francisco"/>
                            </figure>
                            <div class="flex justify-center items-center text-center flex-col gap-3">
                                <h6>SAN FRANCISCO</h6>
                                <div class="flex justify-center items-center text-center flex-col gap-1">
                                    <p>5746, Corsa Avenue, Suite 110,
                                        Westlake, San Francisco,
                                        CA-91362, USA</p>
                                    <p>info@tryndbuy.com</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex md:w-1/4">
                        <a href="#"
                            class="flex flex-col text-primary justify-center items-center text-center bg-background-primaryBg w-full border-[1px] border-solid border-[#717171] gap-4 lg:py-7 py-5 px-4 hover:bg-background-secondary hover:border-secondary"
                            data-aos="flip-left">
                            <figure
                                class="rounded-full w-[60px] h-[60px] flex justify-center items-center bg-white text-background-primaryBg text-2xl">
                                <img class="w-10 py-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/contact/london.png" alt="London"/>
                            </figure>
                            <div class="flex justify-center items-center text-center flex-col gap-3">
                                <h6>LONDON</h6>
                                <div class="flex justify-center items-center text-center flex-col gap-1">
                                    <p>1, Wilde House,
                                        10, Gloucester Terrace,
                                        W2 3DL, London, U.K.</p>
                                    <p>info@tryndbuy.com</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex md:w-1/4">
                        <a href="#"
                            class="flex flex-col text-primary justify-center items-center text-center bg-background-primaryBg w-full border-[1px] border-solid border-[#717171] gap-4 lg:py-7 py-5 px-4 hover:bg-background-secondary hover:border-secondary"
                            data-aos="flip-left">
                            <figure
                                class="rounded-full w-[60px] h-[60px] flex justify-center items-center bg-white text-background-primaryBg text-2xl">
                                <img class="w-10 py-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                                            src="./src/assets/images/contact/shanghai.png" alt="Shanghai"/>
                            </figure>
                            <div class="flex justify-center items-center text-center flex-col gap-3">
                                <h6>SHANGHAI</h6>
                                <div class="flex justify-center items-center text-center flex-col gap-1">
                                    <p>Hero Center, Level 1,
                                        Building 3, West Entrance N.28,
                                        Yuyuan East Rd, Jing'An District,
                                        Shanghai 200040. </p>
                                    <p>info@tryndbuy.com</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <Footer/>
    </>
  )
}

export default Contact
