import { useState } from 'react'

function Header() {

const toggleAside = () =>{
    document.getElementById("asideMenu").classList.toggle("open");
}

  return (
    <header class="bg-background-blurBg text-white absolute top-0 w-full z-50">
        <div class="container mx-auto flex justify-between items-center py-4 px-6" data-aos="fade-down">
            <figure class="flex items-center">
                <a href="/">
                    <img class="w-36" src="/src/assets/images/logo/logo_white.png" alt="pointai"/>
                </a>
            </figure>
            <nav class="hidden lg:flex space-x-8">
                <a class={`p linkhover ${window.location.pathname == '/' ? 'active' : ''}`} href="/">Home</a>
                <div class="relative dropdown">

                    <a class="cursor-pointer p pb-3 linkhover">Products <i class="fa-solid fa-chevron-down text-xs"></i></a>
                    <div class="absolute left-0 mt-2 w-60 text-primary bg-background-secondaryBg shadow-lg dropdown-menu py-3 px-2">
                        <a class="block px-4 py-2 linkhover p" href="/product/try-on-apparel">Apparel Try-on</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/try-on-makeup">Makeup Try-on</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/try-on-watch">Watch Try-on</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/try-on-shoe">Shoe Try-on</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/catalog-generation">Apparel Catalog Generation</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/apparel-categorization">Apparel Categorization</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/texture-variant-generation">Apparel Texture and Variant Generation</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/3d-generation">3D Asset Generation</a>
                        <a class="block px-4 py-2 linkhover p" href="/product/image-sanitization">Image Sanitization</a>
                    </div>
                </div>
                <a class={`p linkhover ${window.location.pathname == '/rnd' ? 'active' : ''}`} href="/rnd">R&D</a>
                <a class={`p linkhover ${window.location.pathname == '/about-us' ? 'active' : ''}`} href="/about-us">About Us</a>
                <a class={`p linkhover ${window.location.pathname == '/contact-us' ? 'active' : ''}`} href="/contact-us">Contact Us</a>
            </nav>
            <div class="hidden lg:flex items-center space-x-4">
                <div>
                    <a href="/" class="hover1">
                        Request a Demo
                    </a>
                </div>
            </div>
            <div class="lg:hidden flex">
                <i class="fas fa-bars text-white cursor-pointer text-2xl linkhover"  onClick={() => toggleAside()}></i>
            </div>
        </div>
        <aside
            class="lg:hidden fixed inset-0 bg-primary text-black transform translate-x-full transition-transform duration-300 overflow-y-scroll aside-menu z-50"
            id="asideMenu">
            <div class="p-4">
                <div class="flex justify-between items-center">
                    <figure> <img src="./src/assets/images/logo/logo.png" class="w-32 pt-3 pb-7" alt="logo"/></figure>
                    <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"  onClick={() => toggleAside()}>
                        <i class="fas fa-times text-3xl text-black linkhover"></i>
                    </button>
                </div>
                <nav class="flex flex-col space-y-4">
                    <a class="p linkhover active" href="/">Home</a>
                    <a class="p linkhover" href="/products">Products</a>
                    <a class="p linkhover" href="/rnd">R&D</a>
                    <a class="p linkhover" href="/about-us">About Us</a>
                    <a class="p linkhover" href="/contact-s">Contact Us</a>
                </nav>
            </div>
        </aside>
    </header>
  )
}

export default Header