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
                  <div class="flex lg:gap-7 gap-5 md:flex-row flex-col pt-10">
                    <div class="flex flex-row gap-12 md:w-1/4  lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden">Makeup Try-on</h6>
                        <div>
                            <a href="/product/try-on-makeup" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                    <div class="flex flex-row gap-12 md:w-1/4  lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                      <h6 class="overflow-hidden">Watch Try-on</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                    <div class="flex flex-row gap-12 md:w-1/4  lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                      <h6 class="overflow-hidden">Shoe Try-on</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                    <div class="flex flex-row gap-12 md:w-1/4  lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                      <h6 class="overflow-hidden">Apparel Catalog Generation</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                </div>
              </div>
              <div class="flex lg:gap-7 gap-5 md:flex-row flex-col pt-8">
                    <div class="flex flex-row gap-12 md:w-1/4   lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                        <h6 class="overflow-hidden">Apparel Categorization</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                    <div class="flex flex-row gap-12 md:w-1/4   lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                      <h6 class="overflow-hidden">Apparel Texture and Variant Generation</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                    <div class="flex flex-row gap-12 md:w-1/4   lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                      <h6 class="overflow-hidden">3D Asset Generation</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
                        </div>
                    </div>
                    <div class="flex flex-row gap-12 md:w-1/4   lg:px-5 md:px-5 px-5 lg:py-2 md:py-2 py-2 bg-[#131B2666] border-[1px] border-solid border-[#717171] text-primary rounded-full items-center aos-init aos-animate" data-aos="flip-left">
                      <h6 class="overflow-hidden">Image Sanitization</h6>
                        <div>
                            <a href="Pricing.html" class="hover1"><i class="fa fa-arrow-right text-primary"></i></a>
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
