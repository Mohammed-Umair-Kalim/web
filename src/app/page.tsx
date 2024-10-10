"use client";

import React from 'react'
import Image from "next/image";
import pic1 from "../../public/pic1.png";
import pic2 from "../../public/pic2.png";
import pic3 from "../../public/pic3.png";

const HomePage = () => {
    return <main className="mb-[]">
    <h1 className="text-black text-4xl mt-10"><b><u><label>Smartphone Reviews:</label></u></b></h1>
    <div style={{ alignItems: 'center' }} className="flex justify-between ">
        <Image src={pic1} alt="smartphone pic" style={{ width: '400px', height: '300px' }}/>
        <Image src={pic2} alt="smartphone pic" style={{ width: '400px', height: '300px' }}/>
        <Image src={pic3} alt="smartphone pic" style={{ width: '400px', height: '300px' }} />
        
      </div>
      <center><p className="text-black"> Recently, several major brands launched exciting new smartphones that cater to diverse consumer needs, these newly introduced smartphones are equiped with amazing features like AI, <br></br> Tri-Folding, Enchanced-Camera etc here are some great release below</p></center>
      <br></br>
      <br></br>

      <div className="text-black">

      <h2 className="text-3xl"><u><b>&nbsp; Latest SmartPhone Releases: &nbsp;</b></u></h2><br></br>

        <li className="text-3xl text-center"> <b><i>Samsung Galaxy S24 Ultra:</i></b> </li>
        <center><p>The Samsung Galaxy S24 Ultra is a flagship smartphone that elevates mobile technology with its impressive features. Sporting a stunning 6.8-inch Dynamic AMOLED display, it offers vibrant colors and deep contrasts, perfect for media consumption. Powered by the latest Snapdragon or Exynos processor, it ensures seamless performance and efficient multitasking. The camera system is a standout, featuring a 200MP main sensor, ultra-wide lens, and advanced zoom capabilities, making it ideal for photography enthusiasts. With a robust battery life and support for fast charging, the S24 Ultra combines cutting-edge technology with elegant design, solidifying Samsung’s reputation in the premium smartphone market.</p></center>

        <br></br>

        <li className="text-3xl text-center"><b><i>Iphone 16 Pro Max:</i></b></li>
        <center><p>The iPhone 16 Pro Max, Apple's latest flagship, pushes the boundaries of smartphone technology. Featuring a stunning 6.7-inch Super Retina XDR display, it offers vibrant colors and deep blacks for an immersive viewing experience. Powered by the A18 chip, users can expect lightning-fast performance and improved energy efficiency. The camera system boasts enhanced low-light capabilities and new computational photography features, making it easier to capture stunning photos and videos. With expanded battery life and advanced connectivity options, the iPhone 16 Pro Max is designed for both productivity and entertainment, solidifying its position as a leader in the premium smartphone market.</p></center>

        <br></br>

        <li className="text-3xl text-center"><b><i>Tri-fold Huawei Mate XT Ultimate:</i></b></li>
        <center><p>The Huawei Mate X2 Ultimate stands out in the foldable smartphone market with its innovative tri-fold design. When unfolded, it boasts a generous 8-inch OLED display, delivering vibrant colors and crisp details for an immersive experience. The device features Huawei’s powerful Kirin 9000 processor, ensuring smooth multitasking and performance. Its advanced camera system, including a 50 MP main sensor, captures stunning photos in various lighting conditions. The Mate X2 Ultimate also emphasizes durability with its robust hinge mechanism and premium materials. With 5G capabilities and a sleek design, this device redefines versatility for tech enthusiasts and professionals alike.</p></center>
        
        <br></br>
        <li className="text-3xl text-center"><b><i>Google Pixel 9 pro XL:</i></b></li>
         <center><p>ChatGPT The Google Pixel 9 Pro XL is set to redefine smartphone photography and user experience. With a 6.7-inch OLED display, it offers vibrant visuals and immersive gaming. Powered by Google’s latest Tensor G3 chip, the device ensures seamless performance and efficiency. The standout feature is its advanced camera system, boasting a 50 MP main sensor and innovative AI enhancements, enabling stunning low-light and high-resolution shots. Running on the latest Android version, it provides a smooth, intuitive interface with timely updates. Enhanced battery life and 5G connectivity further elevate its appeal, making the Pixel 9 Pro XL a top choice for tech enthusiasts.</p></center>
    </div>
    </main>
  };
  

export default HomePage;