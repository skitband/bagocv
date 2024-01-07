"use client";

import { useState } from 'react';

const SideBarComponent = ({activeTab, handleClick}) => {

    const handleMenuClick = (e) => {
        handleClick(e)
    }

    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
        <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
            <div className="leftpart_inner w-full h-auto">
                <div className="logo">
                <a href="#">
                    <h3 className="font-poppins font-black text-[31px] tracking-[5px]">HELLO</h3>
                </a>
                </div>
                <div className="menu px-[0px] py-[50px] w-full float-left">
                    <ul className="transition_link m-0 list-none">
                        <li className={activeTab == 'home' ? 'm-0 w-full float-left active' : 'm-0 w-full float-left'}>
                            <a 
                                className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" 
                                href="#"
                                onClick={() => handleMenuClick('home')} > Home 
                            </a>
                        </li>
                        <li className={activeTab == 'about' ? 'm-0 w-full float-left active' : 'm-0 w-full float-left'}>
                            <a 
                                className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" 
                                href="#"
                                onClick={() => handleMenuClick('about')} > About 
                            </a>
                        </li>
                        <li className={activeTab == 'works' ? 'm-0 w-full float-left active' : 'm-0 w-full float-left'}>
                            <a 
                                className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" 
                                href="#"
                                onClick={() => handleMenuClick('works')} > Works 
                            </a>
                        </li>
                        <li className="m-0 w-full float-left ">
                        <a 
                                className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" 
                                href="#"
                                onClick={() => handleMenuClick('portfolio')} > Portfolio 
                            </a>
                        </li>
                        <li className="m-0 w-full float-left ">
                            <a className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#news">news</a>
                        </li>
                        <li className="m-0 w-full float-left ">
                            <a className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black" href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright w-full float-left">
                <p className="text-[15px] text-[#999] font-montserrat leading-[25px]">
                    ©{year}<br />Created by: <a className="text-[#787878] font-medium transition-all duration-300 hover:text-black" href="https://github.com/skitband">serjoLio</a>
                </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default SideBarComponent