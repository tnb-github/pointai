import { useEffect, useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import ApparelVid from '../assets/videos/bg_apparel.mp4'
import Fitting_Img1 from '../assets/images/index/apparel1.jpeg'
import Fitting_Img2 from '../assets/images/index/apparel2.jpg'
import Fitting_Img3 from '../assets/images/index/apparel3.jpg'
import Apparel_Vid from '../assets/videos/apparel.mp4'


function ApparelTryon() {

  return (
    <>
        <Header/>
        <section class="bg-apparelBg bg-cover bg-center md:pt-20 pt-20 lg:pb-[100px] md:pb-[70px]">
            <video autoPlay muted loop id="productBgVid">
                <source src={ApparelVid} type="video/mp4"/>
            </video>
          <div class="container lg:pt-20 pt-20">
              <div class="md:text-start text-center" data-aos="fade-right">
                  <h3 class="text-black">Virtual Apparel Try-on</h3>
                  <p class="text-black sm:pt-4 pt-3 md:pb-10 pb-4 xl:w-[50%] lg:w-[50%] md:w-[59%]">Point AI goes beyond standard size labels (S, M, L, XL) 
                      by letting online shoppers try clothes on a virtual body model. It shows how garments fit on different body parts, allows mixing and 
                      matching outfits, and helps users find the perfect fit and look.</p>
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
                        <h6>Dress Yourself Digitally</h6>
                    </div>
                    <h4 class="py-4">Virtual Fitting Recommendation</h4>
                    <p class="xl:w-[85%] lg:w-[85%]">
                    The Virtual Fitting Recommendation with Mix & Match feature combines AI-driven size suggestions with an interactive styling experience. 
                    It enables users to receive personalized fit recommendations based on their body measurements, shape, and preferences—while also letting 
                    them mix and match apparel items in real time to create complete outfits.
                        .</p>
                    <br/>
                    <p class="xl:w-[85%] lg:w-[85%]">This feature helps users not only find the right size, but also build their ideal look with confidence, minimizing returns and 
                        enhancing the shopping experience.</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="/" class="hover1 bg-background-primaryBg text-white" target='_blank'>Contact Us</a>
                    </div>
                </div>
                <div class="lg:w-1/2 flex lg:justify-end justify-center">
                    <video autoPlay muted loop id="makeup1" style={{border: '3px #2c2723 solid'}}>
                        <source src={Apparel_Vid} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:py-[30px] md:py-[30px] py-[30px] bg-primary">
        <div class="container">
            <div class="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
                <div class="w-[85%] lg:w-[85%] flex lg:justify-end justify-center">
                        <figure>
                            <img class="w-max" src={Fitting_Img2} alt="Fittings"
                                data-aos="zoom-in-up"/>
                        </figure>
                </div>
                <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>Body-Based Fitting</h6>
                    </div>
                    <h4 class="py-4">Detailed Visualization of Fit Across Styles and Sizes</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">This feature enables users to experience how different types of jeans—such as skinny, slim, straight, or 
                        relaxed—fit their unique body shape. By generating a personalized 3D avatar using user-inputted measurements (waist, hips, thighs, inseam, 
                        etc.), the system simulates how each jeans style conforms to various body zones.</p>

                        <br/>
                    <p class="xl:w-[93%] lg:w-[95%]">Users can view real-time fitting differences, observe 
                        tight or loose areas, and rotate their avatar to see the fit from multiple angles.</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="/" class="hover1 bg-background-primaryBg text-white" target='_blank'>Know More</a>
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
                        <h6>Realistic clothing fit</h6>
                    </div>
                    <h4 class="py-4">Drape Your Style on Your Virtual Twin</h4>
                    <p class="xl:w-[85%] lg:w-[85%]">
                    Experience next-level virtual try-ons with AI-generated avatars that replicate your exact body type using just a selfie and your 
                        key measurements. Our technology simulates how garments naturally fall, stretch, and contour around your figure — showing realistic 
                        draping, fabric tension, and how clothes move with your shape.
                        .</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="/" class="hover1 bg-background-primaryBg text-white" target='_blank'>Contact Us</a>
                    </div>
                </div>
                <div class="w-[85%] lg:w-[85%] flex lg:justify-end justify-center">
                        <figure>
                            <img class="w-max" src={Fitting_Img1} alt="Fittings"
                                data-aos="zoom-in-up"/>
                        </figure>
                </div>
            </div>
        </div>
    </section>
    <section class="lg:py-[30px] md:py-[30px] py-[30px] pb-20 bg-primary">
        <div class="container">
            <div class="grid lg:grid-cols-[55%_45%] md:grid-cols-[48%_48%] justify-around md:gap-0 gap-6">
                <div class="w-[95%] lg:w-[95%] flex lg:justify-end justify-center">
                        <figure>
                            <img class="w-max" src={Fitting_Img3} alt="Fittings"
                                data-aos="zoom-in-up"/>
                        </figure>
                </div>
                <div class="flex text-black flex-col xl:w-full lg:w-[90%] md:text-start text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="flex items-center md:justify-start justify-center">
                        <i class="fa-solid fa-diamond text-xs lg:pe-3 pe-2"></i>
                        <h6>Mix & Match</h6>
                    </div>
                    <h4 class="py-4">Mix, Match, and Perfect Your Fit</h4>
                    <p class="xl:w-[93%] lg:w-[95%]">Empower users to explore their personal style by virtually combining different clothing items—tops, 
                        bottoms, outerwear, and accessories—on their custom body avatar. Our intelligent system allows real-time outfit layering, offering 
                        an accurate visualization of how each piece fits individually and together based on the user’s unique body measurements.</p>

                        <br/>
                    <p class="xl:w-[93%] lg:w-[95%]">For brands, this feature boosts customer engagement and reduces return rates by offering a more personalized,
                     immersive try-before-you-buy experience.</p>
                    <div class="lg:mt-14 md:mt-10 mt-6">
                        <a href="/" class="hover1 bg-background-primaryBg text-white" target='_blank'>Know More</a>
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
                        <a class="overflow-hidden text-sm" href="/makeup-tryon">Makeup Try-on</a>
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

export default ApparelTryon
