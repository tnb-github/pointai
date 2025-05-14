import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'


function MakeupTryon() {

  return (
    <>
        <Header/>
        <section class="bg-heroBg1 bg-cover bg-center md:pt-36 pt-32 lg:pb-[100px] md:pb-[70px] pb-[50px]">
            {/* <video autoPlay muted loop id="myVideo">
                <source src="./src/assets/images/hero_bg.mp4" type="video/mp4"/>
            </video> */}
          <div class="container lg:pt-10 pt-10">
              <div class="md:text-start text-center" data-aos="fade-right">
                  <h3 class="text-black">Virtual Makeup Try-on</h3>
                  <p class="text-black sm:pt-4 pt-3 md:pb-10 pb-4 xl:w-[50%] lg:w-[50%] md:w-[59%]">Point AI offers a safe, easy way to try makeup virtually 
                    using a mobile or web camera, with accurate color and texture—no hesitation, just seamless online beauty trials.</p>
                  <div class="flex gap-10 flex-wrap-reverse items-center md:justify-start justify-center">
                      <div>
                          <a href="/" class="hover1">
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
                        <h6>Makeup Tryon</h6>
                    </div>
                    <h4 class="py-4">The most advanced virtual makeup</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">
                            The safest and most convenient for makeover! Beauty lovers will get to try real life makeup products virtually thanks to 
                            Tryndbuy virtual makeup implementation via mobile or web camera. Customers can do makeup without any hesitation on your 
                            online shop. Tryndbuy provides the most accurate color and texture of products.
                        .</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="About.html" class="hover1">Contact Us</a>
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
                    <video autoPlay muted loop id="makeup1">
                        <source src="/src/assets/videos/makeup-video1.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>How it works</h6>
                    </div>
                    <h4 class="py-4">Makeup tryon in action</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">Lorem ipsum.
                        
                        .</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="https://makeup.tryndbuy.com/makeup3.html#/vm" class="hover1" target='_blank'>Try it now !</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        <Footer/>
    </>
  )
}

export default MakeupTryon
