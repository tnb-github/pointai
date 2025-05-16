import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import MakeupDemo_Vid from '../assets/videos/makeup-demo.mp4'
import Makeup1_Vid from '../assets/videos/makeup1.mp4'
import MakeupVid from '../assets/videos/bg_makeup.mp4'


function MakeupTryon() {

  return (
    <>
        <Header/>
        <section class="bg-shoeBg bg-cover bg-center md:pt-36 pt-32 lg:pb-[100px] md:pb-[70px] pb-[50px]">
            <video autoPlay muted loop id="productBgVid">
                <source src={MakeupVid} type="video/mp4"/>
            </video>
          <div class="container lg:pt-10 pt-10">
              <div class="md:text-start text-center" data-aos="fade-right">
                  <h3 class="text-black">Virtual Makeup Try-on</h3>
                  <p class="text-black sm:pt-4 pt-3 md:pb-10 pb-4 xl:w-[50%] lg:w-[50%] md:w-[59%]">Point AI offers a safe, easy way to try makeup virtually 
                    using a mobile or web camera, with accurate color and texture—no hesitation, just seamless online beauty trials.</p>
                  <div class="flex gap-10 flex-wrap-reverse items-center md:justify-start justify-center">
                      <div>
                          <a href="/" class="hover1 bg-background-primaryBg text-white">
                              Know More
                          </a>
                      </div>
                  </div>
                </div>
          </div>
      </section>
      <section class="lg:py-[100px] md:py-[70px] py-[50px] bg-primary">
        <div class="container">
            <div class="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
                <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>Try Before You Apply</h6>
                    </div>
                    <h4 class="py-4">The most advanced virtual makeup</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">
                    Experience the safest and most convenient way to try a makeover. With Point AI's virtual makeup technology, beauty enthusiasts
                     can apply real-life makeup products virtually using their mobile or web camera—directly on your online store. No mess, no 
                     hesitation—just accurate color, texture, and a true-to-life look, all in real time.</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="/" class="hover1 bg-background-primaryBg text-white">Request a Demo</a>
                    </div>
                </div>
                <div class="lg:w-1/2 flex lg:justify-end justify-center">
                    <video autoPlay muted loop id="makeup1" style={{border: '3px #2c2723 solid'}}>
                        <source src={Makeup1_Vid} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:py-[30px] md:py-[30px] py-[30px] pb-20 bg-primary">
        <div class="container">
            <div class="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
            <div class="w-[95%] lg:w-[95%] flex lg:justify-end justify-center">
                    <video autoPlay muted loop id="makeup1">
                        <source src={MakeupDemo_Vid} type="video/mp4"/>
                    </video>
                </div>
                <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>How it works</h6>
                    </div>
                    <h4 class="py-4">Glow Up in Real Time</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">Real-time facial detection with customizable makeup rendering, allowing users to apply 
                        pre-designed looks or personalize elements like lipstick, eyeliner, contour, and foundation.</p>
                    <br/>
                    <p>Utilizing pre-trained deep learning models, the system detects facial landmarks in real-time camera feeds—identifying 
                        features like eyes, lips, and cheekbones for accurate virtual makeup alignment. </p>
                    <br/>
                    <p>Advanced facial segmentation divides 
                        the face into distinct regions to ensure precise application, while realistic makeup effects are overlaid dynamically, 
                        adapting to lighting conditions. </p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="https://makeup.tryndbuy.com/makeup3.html#/vm" class="hover1 bg-background-primaryBg text-white" target='_blank'>Try it now !</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <section class="bg-aboutBg bg-cover bg-center md:pt-10 pt-10 lg:pb-[100px] md:pb-[70px]">
        <div class="container">
                <div class="flex items-center justify-center text-center flex-col text-black" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                    </div>
                    <h5 class="pt-4 pb-11">See More Features in Action</h5>
                </div>
                <div class="flex lg:gap-7 gap-5 md:flex-row flex-col pt-3 items-center justify-center ">
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <a class="overflow-hidden text-sm" href="/apparel-tryon">Apparel Try-on</a>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <a class="overflow-hidden text-sm" href="/watch-tryon">Watch Try-on</a>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <a class="overflow-hidden text-sm" href="/shoe-tryon">Shoe Try-on</a>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <a class="overflow-hidden text-sm">Apparel Catalog Generation</a>
                    </div>
                </div>
              <div class="flex lg:gap-7 gap-5 md:flex-row flex-col pt-3 items-center justify-center ">
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">Kids Catalog Generation</h6>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">Apparel Video</h6>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">Apparel Color Variant</h6>
                    </div>
                </div>
                <div class="flex lg:gap-7 gap-5 md:flex-row flex-col pt-3">
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">Mobile UI Experience</h6>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">Virtual Assistant</h6>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">3D Asset Generation</h6>
                    </div>
                    <div class="features flex flex-row md:w-1/4 lg:py-2 md:py-2 py-2 aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden text-sm">Image Sanitization</h6>
                    </div>
                </div>
                </div>
        </section>
        <Footer/>
    </>
  )
}

export default MakeupTryon
