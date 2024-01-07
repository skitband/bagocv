"use client";

import { useState } from 'react';

import '../styles/custom.css';
import '../styles/main.css';
import SideBarComponent from './components/SideBarComponent';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import WorksContainer from './containers/WorksContainer';

export default function Home() {

  const [activeTab, setActiveTab] = useState('home');

  const onHandleClick = (e) => {
    setActiveTab(e)
  }

  return (
    <main className="tokyo_tm_all_wrap bg-[#f8f8f8] opened">
      <div className="tokyo_tm_topbar">
        <div className="topbar_inner">
          <div className="logo" data-type="image">
            <a href="#">
              <h3>HELLO</h3>
            </a>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_mobile_menu">
        <div className="menu_list">
          <ul className="transition_link">
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>


      <SideBarComponent activeTab={activeTab} handleClick={onHandleClick}/>
      <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
        <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
          <HomeContainer activeTab={activeTab} />
          <AboutContainer activeTab={activeTab} />
          <WorksContainer activeTab={activeTab} />
        </div>
      </div>
    </main>
  )
}
