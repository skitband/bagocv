import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faFileArrowDown} from '@fortawesome/free-solid-svg-icons';

const HomeContainer = ({activeTab}) => {
    
    const backgroundImageUrl = "./assets/img/monkey.jpg";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`
    };

    return (
        <>
            { activeTab == 'about' ?
            <div id="about" className="tokyo_tm_section animated active fadeInLeft">
                <div id="about" className="tokyo_tm_section animated active fadeInLeft">
                    <div className="container">
                        <div className="tokyo_tm_about w-full h-auto clear-both float-left py-[100px] px-0">
                            <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                                <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                                <div className="left">
                                    <span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">About</span>
                                    <h3 className="font-extrabold font-montserrat">Who Am I?</h3>
                                </div>
                                </div>
                            </div>
                            <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
                                <img class="min-w-full h-96" src="./assets/img/koi.jpg" alt="image" />
                            </div>
                            <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
                                <h3 className="text-[22px] font-bold text-black">Sergio</h3>
                                <span>Front End Developer</span>
                            </div>
                            <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
                                <p className="mb-[11px]">With over 8 years of experience in the dynamic realm of web development, I am a seasoned Front-End Developer specializing in web user interface
                                and how to leverage them to create exceptional user experiences. From designing intuitive interfaces to optimizing performance and scalability.</p>
                                <p>One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, committed to transforming complex ideas into elegant and efficient code.</p>
                            </div>
                            <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
                                <div className="left w-1/2 pr-[50px]">
                                <div className="tokyo_tm_info w-full h-auto clear-both float-left">
                                    <ul className="m-0 list-none">
                                        <li className="m-0"><span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Address:</span><span>Mandaluyong, Philippines</span></li>
                                        <li className="m-0"><span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Email:</span><span><a className="text-[#767676] transition-all duration-300 hover:text-black" href="mailto:tokyo@gmail.com">serjolio@gmail.com</a></span></li>
                                        <li className="m-0"><span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Phone:</span><span><a className="text-[#767676] transition-all duration-300 hover:text-black" href="tel:+77 022 177 05 05">+63 967 288 7664</a></span></li>
                                    </ul>
                                </div>
                                </div>
                                <div className="right w-1/2 pl-[50px]">
                                <div className="tokyo_tm_info">
                                    <ul className="m-0 list-none">
                                        <li className="m-0"><span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Degree:</span><span>Bachelors Degree of IT</span></li>
                                        <li className="m-0"><span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Hobbies:</span><span>[Eat, Sleep, Pray, Code] = Repeat</span></li>
                                        <li className="m-0"><span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Freelance:</span><span className="text-green-600">Available <FontAwesomeIcon icon={faCircleCheck} /></span></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="tokyo_tm_button" data-position="left"><a href="assets/img/cv/1.jpg" download=""> <FontAwesomeIcon icon={faFileArrowDown} /> <span> Download CV</span></a></div>
                        </div>
                    </div>
                    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
                        <div className="container">
                            <div className="in w-full h-auto clear-both float-left flex">
                                <div className="left w-1/2 pr-[50px]">
                                <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                                    <h3 className="text-[20px] font-bold">Programming Skills</h3>
                                </div>
                                <div className="tokyo_progress">
                                    <div className="progress_inner">
                                        <span>
                                            <span className="label">HTML / CSS</span>
                                            <span className="number">
                                            90%
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                            <div className="bar_in" style={{width: "90%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress_inner">
                                        <span>
                                            <span className="label">Javascript</span>
                                            <span className="number">
                                            95%
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                            <div className="bar_in" style={{width: "95%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress_inner">
                                        <span>
                                            <span className="label">Php / Python</span>
                                            <span className="number">
                                            80%
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                            <div className="bar_in" style={{width: "80%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="right w-1/2 pl-[50px]">
                                <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                                    <h3 className="text-[20px] font-bold">Other Skills</h3>
                                </div>
                                <div className="tokyo_progress">
                                    <div className="progress_inner">
                                        <span>
                                            <span className="label">ReactJS / VueJS</span>
                                            <span className="number">
                                            90%
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                            <div className="bar_in" style={{width: "90%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress_inner">
                                        <span>
                                            <span className="label">Redux</span>
                                            <span className="number">
                                            70%
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                            <div className="bar_in" style={{width: "70%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress_inner">
                                        <span>
                                            <span className="label">Typescript</span>
                                            <span className="number">
                                            75%
                                            </span>
                                        </span>
                                        <div className="background">
                                            <div className="bar">
                                            <div className="bar_in" style={{width: "75%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]">
                        <div className="container">
                            <div className="in w-full h-auto clear-both float-left flex">
                                <div className="left w-1/2 pr-[50px]">
                                <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                                    <h3 className="text-[20px] font-bold">Knowledge</h3>
                                </div>
                                <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                                    <ul className="m-0 knowledge">
                                        <li className="m-0 pl-[25px] relative">
                                            <span>
                                            Bootstrap, Tailwind, Ant Design, Material UI
                                            </span>
                                        </li>
                                        <li className="m-0 pl-[25px] relative">
                                            <span>
                                            Redux, NextJS, NuxtJS, Laravel, Django
                                            </span>
                                        </li>
                                        <li className="m-0 pl-[25px] relative">
                                            <span>
                                            MySQL, MSSQL, MongoDB, NoSQL
                                            </span>
                                        </li>
                                        <li className="m-0 pl-[25px] relative">
                                            <span>
                                            SCSS, Sass, Less, Figma, Photoshop
                                            </span>
                                        </li>
                                        <li className="m-0 pl-[25px] relative">
                                            <span>
                                            Webpack, Baebl, Jest
                                            </span>
                                        </li>
                                        <li className="m-0 pl-[25px] relative">
                                            <span>
                                            Git, AWS, Azure Devops, Docker
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                <div className="right w-1/2 pl-[50px]">
                                <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                                    <h3 className="text-[20px] font-bold">Education</h3>
                                </div>
                                <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                                <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
                                    <ul className="m-0 list-none relative inline-block pt-[10px]">
                                        <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                                            <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                                            <div className="time w-1/2 pr-[20px] bg-g"><span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">2009 - 2013</span></div>
                                            <div className="place w-1/2 pl-[20px]">
                                                <h3 className="text-[16px] mb-[2px] font-semibold">Jose Rizal University</h3>
                                                <span className="text-[14px]">Tertiary School Bachelors Degree of Information Technology</span>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="m-0 w-full float-left relative pl-[20px] pb-[45px]">
                                            <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                                            <div className="time w-1/2 pr-[20px]"><span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">2006 - 2009</span></div>
                                            <div className="place w-1/2 pl-[20px]">
                                                <h3 className="text-[16px] mb-[2px] font-semibold">Binangonan Catholic College</h3>
                                                <span className="text-[14px]">Secondary School</span>
                                            </div>
                                            </div>
                                        </li>
                                        <li className="m-0 w-full float-left relative pl-[20px] ">
                                            <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                                            <div className="time w-1/2 pr-[20px]"><span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">2000 - 2006</span></div>
                                            <div className="place w-1/2 pl-[20px]">
                                                <h3 className="text-[16px] mb-[2px] font-semibold">DSMMS</h3>
                                                <span className="text-[14px]">Primary School</span>
                                            </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
                        <div className="container"></div>
                    </div>
                </div>
            </div> : ''
            
            }
        </>
    );
};

export default HomeContainer;
