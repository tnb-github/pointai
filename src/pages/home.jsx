import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import ATO_Img from '../assets/images/index/01.png'
import MTO_Img from '../assets/images/index/02.png'
import ETO_Img from '../assets/images/index/03.png'
import CTO_Img from '../assets/images/index/04.png'
import Patents_Img from '../assets/images/index/patents.png'
import Innovator_Img from '../assets/images/index/innovator.png'
import Partner_Img from '../assets/images/index/partner.png'
import Biba_Img from '../assets/images/index/biba.png'
import AB_Img from '../assets/images/index/aditya-birla.png'
import VM_Img from '../assets/images/index/vero-moda.png'
import FK_Img from '../assets/images/index/flipkart.png'
import HeroBg_Vid from '../assets/videos/hero_bg.mp4'


function Home() {

  const startVideo = () => {
        const introVideo = document.getElementById("introVideo")
        introVideo.classList.remove("hidden")
        introVideo.play();
        document.getElementById("openVideoContainer").classList.add("hidden");
        document.getElementById("closeVideo").classList.remove("hidden");
        introVideo.addEventListener('ended',myHandler,false);
            function myHandler(e) {
                stopVideo()
            }
    }

    const stopVideo = () => {
        const introVideo = document.getElementById("introVideo")
        document.getElementById("openVideoContainer").classList.remove("hidden");
                introVideo.classList.add("hidden")
                document.getElementById("closeVideo").classList.add("hidden");
                introVideo.pause();
    }


  return (
    <>
      <Header/>
        <section class="bg-heroBg bg-cover bg-center md:pt-36 pt-32 lg:pb-[100px] md:pb-[70px] pb-[50px]">
            <video autoPlay muted loop id="myVideo">
                <source src={HeroBg_Vid} type="video/mp4"/>
            </video>
          <div class="container lg:pt-30 pt-30">
              <div class="md:text-start text-center" data-aos="fade-right">
                  <h1 class="text-black">Point AI</h1>
                  <h3 class="text-black sm:pt-4 pt-3 md:pb-10 pb-4 xl:w-[50%] lg:w-[50%] md:w-[59%] subheading">Auto-generate advanced ecom platform
                     with interactive virtual product & try-on.</h3>
                  <div class="flex gap-10 flex-wrap-reverse items-center md:justify-start justify-center">
                      <div>
                          <a href="/" class="hover1">
                              Explore More
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <div class="bg-primary border-y-[5px] border-borderColor border-solid">
        <section class="lg:py-[100px] md:py-[70px] py-[50px]">
            <div class="lg:w-[90%] w-[95%] m-auto">
                <div class="flex items-center justify-center text-center flex-col text-background-primaryBg" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>OUR SOLUTIONS</h6>
                    </div>
                    <h2 class="pt-4 md:pb-11 pb-8">Explore Best AI Solutions</h2>
                </div>
                <div class="flex lg:flex-row lg:flex-nowrap flex-wrap justify-center lg:gap-y-0 gap-y-6">
                    <div class="lg:w-1/4 md:w-1/2 md:px-3">
                        <div class="relative group h-full" data-aos="flip-left">
                            <div class="relative h-full">
                                <figure class="h-full">
                                    <img class="w-full h-full relative top-0 left-0"
                                        src={ATO_Img} alt="apparel_try_on"/>
                                    <div class="absolute top-0 left-0 w-full h-full linear-gradient">
                                    </div>
                                </figure>
                            </div>
                            <div
                                class="absolute bottom-0 flex flex-col justify-center p-6 text-primary transition-all group-hover:justify-start group-hover:pb-6">
                                <a href="/product/try-on-apparel" class="linkhover">
                                    <h4 class="transition-all group-hover:translate-y-[-20%]">Apparel Try-On</h4>
                                </a>
                                <p class="hidden group-hover:block transition-all">Point AI goes beyond standard size labels (S, M, L, XL) by letting online 
                                  shoppers try clothes on a virtual body model. It shows how garments fit on different body parts, allows mixing and matching 
                                  outfits, and helps users find the perfect fit and look.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 md:px-3">
                        <div class="relative group h-full" data-aos="flip-left">
                            <div class="relative h-full">
                                <figure class="h-full">
                                    <img class="w-full h-full relative top-0 left-0"
                                        src={MTO_Img} alt="makeup_try_on"/>
                                    <div class="absolute top-0 left-0 w-full h-full linear-gradient"/>
                                </figure>
                            </div>
                            <div
                                class="absolute bottom-0 flex flex-col justify-center p-6 text-primary transition-all group-hover:justify-start group-hover:pb-6">
                                <a href="/product/try-on-makeup" class="linkhover">
                                    <h4 class="transition-all group-hover:translate-y-[-20%]">Makeup Try-On</h4>
                                </a>
                                <p class="hidden group-hover:block transition-all">Point AI offers a safe, easy way to try makeup virtually using a mobile or 
                                  web camera, with accurate color and texture—no hesitation, just seamless online beauty trials.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 md:px-3">
                        <div class="relative group h-full" data-aos="flip-left">
                            <div class="relative h-full">
                                <figure class="h-full">
                                    <img class="w-full h-full relative top-0 left-0"
                                        src={ETO_Img} alt="eyewear_try_on"/>
                                    <div class="absolute top-0 left-0 w-full h-full linear-gradient"/>
                                </figure>
                            </div>
                            <div
                                class="absolute bottom-0 flex flex-col justify-center p-6 text-primary transition-all group-hover:justify-start group-hover:pb-6">
                                <a href="Services.html" class="linkhover">
                                    <h4 class="transition-all group-hover:translate-y-[-20%]">Eyewear Try-On</h4>
                                </a>
                                <p class="hidden group-hover:block transition-all">Lorem ipsum dolor sit amet,
                                    consectetur
                                    elit,
                                    sed do eiusmod tempor incididunt labore.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/4  md:w-1/2 md:px-3">
                        <div class="relative group h-full" data-aos="flip-left">
                            <div class="relative h-full">
                                <figure class="h-full">
                                    <img class="w-full h-full relative top-0 left-0"
                                        src={CTO_Img} alt="apparel_catalog"/>
                                    <div class="absolute top-0 left-0 w-full h-full linear-gradient"/>
                                </figure>
                            </div>
                            <div
                                class="absolute bottom-0 flex flex-col justify-center p-6 text-primary transition-all group-hover:justify-start group-hover:pb-6">
                                <a href="Services.html" class="linkhover">
                                    <h4 class="transition-all group-hover:translate-y-[-20%]">Apparel Catalog Generation</h4>
                                </a>
                                <p class="hidden group-hover:block transition-all duration-500 ease-in-out">Lorem ipsum
                                    dolor
                                    sit amet, consectetur elit,
                                    sed do eiusmod tempor incididunt labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center md:pt-16 pt-8 px-3">
                    <a href="/products" class="hover1">View All</a>
                </div>
            </div>
        </section>
        <section class="mx-auto lg:mb-[100px] md:mb-[70px] mb-[50px] bg-ctaBg bg-no-repeat bg-center lg:w-[95%] w-[95%]" style={{position: 'relative'}}>
            <video id="introVideo" class="hidden">
                <source src="/src/assets/videos/tryndbuy-intro.mp4" type="video/mp4"/>
            </video>
            <button id="closeVideo" class="absolute top-5 right-10 text-gray-500 hover:text-gray-700 z-50 hidden">
                                    <i class="fa-solid fa-xmark text-3xl text-white hover:text-secondary"  onClick={stopVideo}></i>
                                </button>
            <div class="container"  id="openVideoContainer" >
                <div class="flex md:gap-4 gap-10 md:flex-row flex-col lg:py-32 md:py-24 py-16">
                    <div class="flex md:w-1/2 justify-center" data-aos="fade-up">
                        <div class="text-primary md:text-start text-center flex flex-col md:items-start items-center">
                            <div class="flex items-center md:justify-start justify-center">
                                <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                                <h6>AI Innovation Hub</h6>
                            </div>
                            <h2 class="pt-4 md:pb-4 pb-3 xl:w-[90%]">Unlock The Future with Point AI</h2>
                            <div class="lg:mt-6 mt-4">
                                <a class="hover1" onClick={startVideo}>Play Intro</a>
                            </div>
                        </div>
                    </div>
                    <div class="flex md:w-1/2 justify-center items-center">
                        <a class="flex gap-4 items-center group transition-all" data-aos="zoom-in-up" onClick={startVideo}>
                            <figure
                                class="flex items-center justify-center md:w-24 w-20 h-20 md:h-24 rounded-full bg-primary animate-pulse group-hover:bg-secondary">
                                <i class="fa fa-play text-background-primaryBg  md:text-4xl text-2xl"></i>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="lg:py-[100px] md:py-[70px] py-[50px]">
            <div class="container">
                <div class="flex gap-4 md:flex-row flex-col">
                    <div class="flex md:w-1/2">
                        <div class="lg:pb-8 pb-6 text-background-primaryBg md:text-start text-center flex flex-col md:items-start items-center"
                            data-aos="fade-up">
                            <div class="flex items-center md:justify-start justify-center">
                                <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                                <h6>AWARDS & RECOGNITIONS</h6>
                            </div>
                            <h3 class="pt-4 md:pb-4 pb-3">What Makes Us Best</h3>
                            <p class="xl:w-[80%]">Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut 
                              labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip 
                              ex ea commodo  consequat.</p>
                            <div class="flex lg:gap-12 gap-8 items-center lg:pt-14 pt-10 flex-wrap justify-center">
                                <div>
                                    <a href="Services.html" class="hover1">Know More</a>
                                </div>
                                {/* <div>
                                    <a class="flex gap-4 items-center" href="#">
                                        <figure
                                            class="flex items-center justify-center w-10 h-10 rounded-full bg-secondary animate-pulse">
                                            <i class="fa fa-play text-[#04070E] text-sm"></i>
                                        </figure>
                                        <p>Watch Intro</p>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="flex md:w-1/2 flex-col gap-7">
                        <div class="flex lg:py-6 py-6 lg:px-6 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            <figure>
                                <img class="rounded-full md:w-36 w-[150px]" src={Patents_Img}
                                    alt="patents"/>
                            </figure>
                            <div class="flex lg:py-6 py-6 gap-2 flex-col">
                                <h5>70+ GRANTED PATENTS GLOBALLY</h5>
                                <p class="lg:text-[14px] text-[12px]">
                                    US, CHINA, KOREA & INDIA
                                </p>
                            </div>
                        </div>
                        <div class="flex lg:py-10 py-8 lg:px-8 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] self-end sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            <figure>
                                <img class="rounded-full md:w-36 w-[150px]" src={Innovator_Img}
                                    alt="amazon"/>
                            </figure>
                            <div class="flex gap-2 flex-col">
                                <h5>INNOVATOR OF THE YEAR 2020</h5>
                                <p class="lg:text-[14px] text-[12px]">
                                  Awarded for "The most advanced virtual try-on room in the world"
                                </p>
                            </div>
                        </div>
                        <div class="flex lg:py-10 py-8 lg:px-8 px-6 gap-8  bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary xl:w-[85%] lg:w-[90%] sm:flex-row flex-col sm:items-start items-center sm:text-start text-center group"
                            data-aos="flip-left">
                            <figure>
                                <img class="rounded-full md:w-36 w-[90px]" src={Partner_Img}
                                    alt="Partners"/>
                            </figure>
                            <div class="flex gap-2 flex-col">
                                <h5>50+ TRUSTED PARTNERS</h5>
                                <p class="lg:text-[14px] text-[12px]">
                                  Working with top brands globally
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="lg:py-[100px] md:py-[50px] py-[50px] bg-[#f6f6ed]">
            <div class="lg:w-[90%] w-[95%] m-auto">
                  <div class="flex items-center justify-center text-center flex-col text-black" data-aos="fade-up">
                      <div class="flex items-center md:justify-start justify-center">
                          <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                          <h6>OUR PARTNERS</h6>
                      </div>
                      <h2 class="pt-4 md:pb-11 pb-8">Our Trusted Partners Globally</h2>
              </div>
            </div>
            <div class="container m-auto" data-aos="zoom-in">
            <div class="partners_Slider overflow-hidden relative group ">
                <div class="w-[calc(250px*14)] animate-scroll flex group-hover:animate-paused">
                    <div class="w-60">
                        <img class="w-36" src={Biba_Img} alt="biba"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={AB_Img} alt="Aditya Birla"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={VM_Img} alt="Vero moda"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={FK_Img} alt="Flipkart"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={Biba_Img} alt="biba"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={Biba_Img} alt="biba"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={Biba_Img} alt="biba"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={Biba_Img} alt="biba"/>
                    </div>
                    <div class="w-60">
                        <img class="w-36" src={Biba_Img} alt="biba"/>
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

export default Home