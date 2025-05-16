import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import ShoeVid from '../assets/videos/bg_shoes.mp4'


function ShoeTryon() {

  return (
    <>
        <Header/>
        <section class="bg-shoeBg bg-cover bg-center md:pt-20 pt-20 lg:pb-[100px] md:pb-[70px]">
            <video autoPlay muted loop id="productBgVid">
                <source src={ShoeVid} type="video/mp4"/>
            </video>
          <div class="container lg:pt-20 pt-20">
              <div class="md:text-start text-center" data-aos="fade-right">
                  <h3 class="text-black">Virtual Shoe Try-on</h3>
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
                        <h6>Step Into Style – Virtually</h6>
                    </div>
                    <h4 class="py-4">Virtual shoe fitting made simple and smart</h4>
                    <p class="xl:w-[85%] lg:w-[85%]">
                    Step into the future of footwear shopping with an intelligent virtual shoe fitting experience that’s fast, accurate, and effortless.
                     Using advanced computer vision and AI, users can try on shoes in real time using their smartphone or webcam. </p>
                     <br/>
                     <p class="xl:w-[85%] lg:w-[85%]">The system analyzes foot
                      size, shape, and positioning to provide precise fit recommendations and realistic 3D visualizations of how each shoe looks when worn.</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="/" class="hover1 bg-background-primaryBg text-white">Request a Demo</a>
                    </div>
                </div>
                <div class="lg:w-1/2 flex lg:justify-end justify-center">
                    <video autoPlay muted loop id="makeup1" style={{border: '3px #2c2723 solid'}}>
                        <source src="/src/assets/videos/makeup1.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:py-[30px] md:py-[30px] py-[30px] bg-primary">
        <div class="container">
            <div class="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
            <div class="w-[95%] lg:w-[95%] flex lg:justify-end justify-center">
                        <figure>
                            <img class="w-max" src="/src/assets/images/index/makeup2.png" alt="makeup"
                                data-aos="zoom-in-up"/>
                        </figure>
                </div>
                <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>Makeup Tryon</h6>
                    </div>
                    <h4 class="py-4">Product Features</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">Point AI virtual makeup integration makes your online store more experiential and preferable. 
                    Customer will get to try-on all products for complete makeup looks with realistic color and texture. Customers instantly with live 
                    camera can do mix and match any makeup products to do complete makeover. You can provide them more fun and engaging makeup shopping
                     experience by implementing Point AI try-on feature to your e-commerce portal.
                        
                        .</p>
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
                        <a class="overflow-hidden text-sm" href="/makeup-tryon">Makeup Try-on</a>
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

export default ShoeTryon
