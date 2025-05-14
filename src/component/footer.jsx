import { useState } from 'react'
import Logo from '../assets/images/logo/logo_white.png'


function Footer() {

  return (
    <footer class="lg:pt-[100px] md:pt-[70px] pt-[50px] border-t-[5px] border-solid border-borderColor">
        <div class="container">
            <div class="flex md:flex-row flex-col gap-4 justify-between">
                <div
                    class="flex flex-col xl:w-1/4 md:w-[30%] text-primary md:items-start items-center md:text-start text-center">
                    <figure>
                        <img class="w-44" src={Logo} alt="logo"/>
                    </figure>
                    <p class="lg:py-4 py-3">Auto-generate advanced ecom platform
                     with interactive virtual product & try-on.</p>
                    <h5 class="pt-3 pb-5">Social Media</h5>
                    <div class="flex gap-4 pb-4">
                        <a href="#"
                            class="p-3 flex justify-center items-center border-white border-[1px] border-solid text-white bg-background-primaryBg hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF]">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#"
                            class="p-3 flex justify-center items-center border-white border-[1px] border-solid text-white bg-background-primaryBg hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF]">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#"
                            class="p-3 flex justify-center items-center border-white border-[1px] border-solid text-white bg-background-primaryBg hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF]">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="p-3 flex justify-center items-center border-white border-[1px] border-solid text-white bg-background-primaryBg hover:bg-[#00F0FF] hover:text-black hover:border-[#00F0FF]">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col lg:w-[60%] md:w-[65%]">
                    <div class="flex flex-col gap-3 w-full md:text-start text-center">
                        <h6 class="text-primary">Subscribe To Newsletter</h6>
                        <form class="flex lg:gap-4 gap-3 w-full md:flex-row flex-col">
                            <input type="email" placeholder="Your email address..."
                                class="rounded-[30px] text-primary border-[1px] border-solid border-primary bg-transparent py-3 px-5 p w-full"
                                required name="footerMail"/>
                            <button class="hover1">Subscribe</button>
                        </form>
                        <div id="footerModal"
                            class="fixed inset-0 items-center justify-center bg-black bg-opacity-50 hidden z-50 px-3">
                            <div class="bg-background-blurBg rounded-lg overflow-hidden shadow-lg w-full max-w-md p-6">
                                <img src="assets/images/icons/Confirmation_1.gif" alt="submitIcon" class="mx-auto w-24"/>
                                <div class="flex flex-col gap-3 items-center text-center mt-4 text-white">
                                    <h3 class="text-lg font-semibold">Response Submitted</h3>
                                    <h6 class="text-sm mt-2">Your details have been successfully submitted. Thanks!</h6>
                                </div>
                                <button id="closeFooterModal" class="hover1 mt-8 mx-auto">Close</button>
                            </div>
                        </div>
                    </div>
                    <hr class="text-primary my-6"/>
                    <div class="flex flex-row justify-between md:gap-3 gap-6 md:flex-nowrap flex-wrap">
                        <div class="flex flex-col gap-3">
                            <h4 class="text-primary">Contact</h4>
                            <ul class="flex gap-2 flex-col">
                                <li class="text-primary linkhover">
                                    <a href="#" class="flex gap-3 items-center ">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <p>120 West Lancashire, England</p>
                                    </a>
                                </li>
                                <li class=" text-primary linkhover">
                                    <a href="#" class="flex gap-3 items-center">
                                        <i class="fa-solid fa-envelope"></i>
                                        <p>support@username.com</p>
                                    </a>
                                </li>
                                <li class="text-primary linkhover">
                                    <a href="#" class="flex gap-3 items-center">
                                        <i class="fa-solid fa-phone"></i>
                                        <p>(+122) 34 5678 9100</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h4 class="text-primary">Pages</h4>
                            <ul class="flex flex-col gap-2">
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">About</a>
                                </li>
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">Contact</a>
                                </li>
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">Pricing</a>
                                </li>
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">Projects</a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h4 class="text-primary">Help</h4>
                            <ul class="flex flex-col gap-2">
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">Privacy Policy</a>
                                </li>
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">Customer Support</a>
                                </li>
                                <li class="text-primary linkhover">
                                    <a href="#" class="p">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t-[5px] border-[#FFFFFF33] border-solid lg:mt-[50px] md:mt-[30px] mt-[20px] bg-secondary">
            <p class="lg:py-3 py-2 text-center text-black">Copyright 2025 Point AI, All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer