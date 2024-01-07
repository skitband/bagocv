import { useState } from 'react';
import WorkModalComponent from '../components/WorkModalComponent'
import contentDataItem from '../contentData';

const WorksContainer = ({activeTab}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedWorkId, setSelectedWorkId] = useState(null);

    const handleOpenModal = (id) => {
        setIsOpen(true);
        setSelectedWorkId(id);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedWorkId(null);
    }

    return (
        <>
        <WorkModalComponent isModalOpen={isOpen} id={selectedWorkId} onClose={handleCloseModal} contentData={contentDataItem} />
        { activeTab == 'works' ?
        <div id="works" className="tokyo_tm_section animated active fadeInLeft">
            <div className="container">
                <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
                    <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                        <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                        <div className="left">
                            <span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">Works</span>
                            <h3 className="font-extrabold font-montserrat">Work Career</h3>
                        </div>
                        </div>
                    </div>
                    <div className="list w-full h-auto clear-both float-left">
                        <ul className="ml-[-40px] list-none flex flex-wrap">
                            <li className="mb-[40px] w-1/3 h-full pl-[40px]" onClick={() => handleOpenModal(1)}>
                                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
                                    <h3 className="title font-bold text-black text-[18px] mt-[20px]">React Developer</h3>
                                    <h5 className="leading-6 text-sm font-bold">Eclaro Philippines</h5>
                                    <p className="text py-3">
                                        Front-end developer for Westfield...
                                    </p>
                                    <span className="text-sm italic">Jan 2023 - Present</span>
                                    <div className="tokyo_tm_read_more"><a href="#"><span>Read More</span></a></div>
                                    <a className="tokyo_tm_full_link" href="#"></a><img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src="assets/img/news/1.jpg" alt="image" />
                                </div>
                            </li>
                            <li className="mb-[40px] w-1/3 h-full pl-[40px]" onClick={() => handleOpenModal(2)}>
                                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
                                    <h3 className="title font-bold text-black text-[18px] mt-[20px]">Mid Front End Developer</h3>
                                    <h5 className="leading-6 text-sm font-bold">BCS Technology</h5>
                                    <p className="text py-3">
                                        UI/UX developer for Discovery Parks AU...
                                    </p>
                                    <span className="text-sm italic">Nov 2021 - Jan 2023</span>
                                    <div className="tokyo_tm_read_more"><a href="#"><span>Read More</span></a></div>
                                    <a className="tokyo_tm_full_link" href="#"></a><img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src="assets/img/news/1.jpg" alt="image" />
                                </div>
                            </li>
                            <li className="mb-[40px] w-1/3 h-full pl-[40px]" onClick={() => handleOpenModal(3)}>
                                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
                                    <h3 className="title font-bold text-black text-[18px] mt-[20px]">Front End Developer</h3>
                                    <h5 className="leading-6 text-sm font-bold">Rightchoice Philippines</h5>
                                    <p className="text py-3">
                                        One of the leading financial institution in Singapore...
                                    </p>
                                    <span className="text-sm italic">Mar 2020 - Jun 2021</span>
                                    <div className="tokyo_tm_read_more"><a href="#"><span>Read More</span></a></div>
                                    <a className="tokyo_tm_full_link" href="#"></a><img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src="assets/img/news/1.jpg" alt="image" />
                                </div>
                            </li>
                            <li className="mb-[40px] w-1/3 h-full pl-[40px]" onClick={() => handleOpenModal(4)}>
                                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
                                    <h3 className="title font-bold text-black text-[18px] mt-[20px]">Web Developer</h3>
                                    <h5 className="leading-6 text-sm font-bold">Traxiontech</h5>
                                    <p className="text py-3">
                                        Fintech Company in the Philippines empowered...
                                    </p>
                                    <span className="text-sm italic">Aug 2018 - Mar 2020</span>
                                    <div className="tokyo_tm_read_more"><a href="#"><span>Read More</span></a></div>
                                    <a className="tokyo_tm_full_link" href="#"></a><img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src="assets/img/news/1.jpg" alt="image" />
                                </div>
                            </li>
                            <li className="mb-[40px] w-1/3 h-full pl-[40px]" onClick={() => handleOpenModal(5)}>
                                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
                                    <h3 className="title font-bold text-black text-[18px] mt-[20px]">Jr. Web Developer</h3>
                                    <h5 className="leading-6 text-sm font-bold">MAA General Assurance</h5>
                                    <p className="text py-3">
                                        Malayan company expertise in nonlife insurance...
                                    </p>
                                    <span className="text-sm italic">Aug 2018 - Mar 2020</span>
                                    <div className="tokyo_tm_read_more"><a href="#"><span>Read More</span></a></div>
                                    <a className="tokyo_tm_full_link" href="#"></a><img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src="assets/img/news/1.jpg" alt="image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0">
                <div className="container"></div>
            </div>
        </div> : ''
                
        }
        </>
        
        
    )
}

export default WorksContainer