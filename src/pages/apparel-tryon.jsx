import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'


function ApparelTryon() {

  return (
    <>
        <Header/>
        <section class="bg-heroBg1 bg-cover bg-center md:pt-36 pt-32 lg:pb-[100px] md:pb-[70px] pb-[50px]">
            {/* <video autoPlay muted loop id="myVideo">
                <source src="./src/assets/images/hero_bg.mp4" type="video/mp4"/>
            </video> */}
          <div class="container lg:pt-10 pt-10">
              <div class="md:text-start text-center" data-aos="fade-right">
                  <h3 class="text-black">Virtual Apparel Try-on</h3>
                  <p class="text-black sm:pt-4 pt-3 md:pb-10 pb-4 xl:w-[50%] lg:w-[50%] md:w-[59%]">Point AI goes beyond standard size labels (S, M, L, XL) 
                      by letting online shoppers try clothes on a virtual body model. It shows how garments fit on different body parts, allows mixing and 
                      matching outfits, and helps users find the perfect fit and look.</p>
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
                        <h6>Apparel Tryon</h6>
                    </div>
                    <h4 class="py-4">Virtual Fitting Recommendation</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">
                        Point AI does not only suggest the standard size of apparel by saying S, M, L, XL. Enables online shoppers to wear the clothes
                         on their virtual body model to check size, fit, and look. Tryndbuy highlights how tight or loose the clothes on the different \
                         body parts.
                        .</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="https://demo06.tryndbuy.com/" class="hover1" target='_blank'>Contact Us</a>
                    </div>
                </div>
                <div class="lg:w-1/2 flex lg:justify-end justify-center">
                    <video autoPlay muted loop id="makeup1" style={{border: '3px #2c2723 solid'}}>
                        <source src="/src/assets/videos/apparel.mp4" type="video/mp4"/>
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
                        <h6>How it works</h6>
                    </div>
                    <h4 class="py-4">Apparel Try-on in action</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">From creating a body model with your measurement to trying multiple apparels has become so 
                        convenient using our AI baed try-on solution.</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="https://demo06.tryndbuy.com/" class="hover1" target='_blank'>Try it now !</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        <Footer/>
    </>
  )
}

export default ApparelTryon
