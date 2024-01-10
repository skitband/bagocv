import React from 'react'

const PortfolioContainer = ({activeTab}) => {
  return (
    <div>
            { activeTab == 'portfolio' ?
            <div id="portfolio" className="tokyo_tm_section animated active fadeInLeft">
            <div className="container">
              <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
                <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[40px]">
                  <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                    <div className="left">
                      <span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">
                        Portfolio
                      </span>
                      <h3 className="font-extrabold font-montserrat">
                        My Folio
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="list_wrapper w-full h-auto clear-both float-left">
                  <ul
                    className="portfolio_list gallery_zoom ml-[-40px] list-none"
                  >
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://www.facebook.com/heyhempco/" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio3.png"
                              alt="image"
                              width={100}
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio3.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio3.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://gavagives.tech" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio2.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio2.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio2.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://rightchoicefinance.asia/" target="_blank" >
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio5.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio5.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio5.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://www.eclaro.com/" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio8.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio8.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio8.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://www.westfieldinsurance.com/about-us/company" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio7.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio7.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio7.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://maa.com.ph" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio1.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio1.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio1.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://gdayparks.com.au/" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio6.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio6.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio6.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li
                      className="mb-[40px] float-left w-1/3 pl-[40px] item__"
                    >
                      <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                        <div
                          className="entry tokyo_tm_portfolio_animation_wrap"
                        >
                          <a className="popup_info" href="https://traxiontech.net" target="_blank">
                            <img
                              className="opacity-0 min-w-full"
                              src="assets/img/portfolio4.png"
                              alt="image"
                            />
                            <div
                              className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                              data-img-url="assets/img/portfolio4.png"
                              style={{
                                backgroundImage: 'url("assets/img/portfolio4.png")',
                                
                              }}
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           : ''
            
            }
        </div>
  )
}

export default PortfolioContainer