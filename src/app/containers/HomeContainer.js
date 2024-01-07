import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter, faSquareGithub, faSquareJs } from '@fortawesome/free-brands-svg-icons';

const HomeContainer = ({activeTab}) => {
    
    const backgroundImageUrl = "./assets/img/monkey.jpg";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`
    };

    return (
        <div>
            { activeTab == 'home' ?
            <div id="home" className="tokyo_tm_section animated active fadeInLeft">
                <div className="container">
                    <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
                    <div className="home_content flex items-center">
                        <div className="avatar min-w-[300px] min-h-[300px] relative rounded-full" data-type="wave">
                        <div className="image absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="assets/img/slider/1.jpg" style={containerStyle}></div>
                        </div>
                        <div className="details ml-[80px]">
                            <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">Serjo <span>Lio</span></h3>
                            <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                            An experienced Front End Developer adept in bringing forth expertise in user interface, design, testing and development of web applications.
                            </p>
                            <div className="social w-full float-left">
                                <ul className="m-0 list-none">
                                <li className="mr-[8px] inline-block">
                                    <a className="text-black text-[30px] transition-all duration-300 hover:text-black active" href="https://www.facebook.com/" target="_blank">
                                    <FontAwesomeIcon icon={ faSquareFacebook } size="2xl" className="faSocIcons" />
                                    </a>
                                </li>
                                <li className="mr-[8px] inline-block">
                                    <a className="text-black text-[30px] transition-all duration-300 hover:text-black" href="https://twitter.com/your_Reap3r" target="_blank">
                                    <FontAwesomeIcon icon={ faSquareTwitter } size="2xl" className="faSocIcons" />
                                    </a>
                                </li>
                                <li className="mr-[8px] inline-block">
                                    <a className="text-black text-[30px] transition-all duration-300 hover:text-black" href="https://github.com/skitband" target="_blank">
                                    <FontAwesomeIcon icon={ faSquareGithub } size="2xl" className="faSocIcons" />
                                    </a>
                                </li>
                                <li className="mr-[8px] inline-block">
                                    <a className="text-black text-[30px] transition-all duration-300 hover:text-black" href="https://codesandbox.io/u/skitband00" target="_blank">
                                    <FontAwesomeIcon icon={ faSquareJs } size="2xl" className="faSocIcons" />
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div> : ''
            
            }
        </div>
    );
};

export default HomeContainer;
