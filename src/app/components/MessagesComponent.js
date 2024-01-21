"use client"

import React, { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabase';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { LoadingComponent } from './LoadingComponent';

const MessageModal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;
  
    return (
    <div className={`tokyo_tm_modalbox ${isOpen ? 'opened' : ''}`}>
        <div className="box_inner h-[40vh]">
            <div className="close">
            <a href="#" onClick={onClose}>
                <FontAwesomeIcon icon={faClose}/>
            </a>
            </div>
            <div className="description_wrap">
                <div className="details">
                    <div className="extra">
                        {message.message}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


export const MessagesComponent = () => {
    
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMsg = async () => {
          setIsLoading(true)
          const { data } = await supabase.from('messages').select('*')
          setMessages(data)
          setTimeout(() => {
            setIsLoading(false)
          }, 2000)
        }
        
        fetchMsg()
        
    }, [])

    const openModal = (message) => {
        setSelectedMessage(message);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMessage(null);
        setIsModalOpen(false);
    };

    return (
        <>
        <div id="messages" className="tokyo_tm_section animated active fadeInLeft">
            <div className="container">
                <div className="tokyo_tm_about w-full h-auto clear-both float-left py-[100px] px-0">
                    <div className="tokyo_tm_title w-full h-auto clear-both float-left">
                        <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                        
                        <div className="left">
                            <span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">Messages</span>
                            <h3 className="font-extrabold font-montserrat">My Inbox</h3>
                        </div>
                        <Link href="/" className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black">
                            Home 
                        </Link>
                        
                        </div>
                    </div>
                    <div className="top_author_img w-full h-auto clear-both float-left relative mb-[35px]">
                        { isLoading ? <LoadingComponent isLoading={isLoading}/> : 
                        <div className="tokyo_tm_news w-full clear-both float-left h-auto px-0 pb-[45px] pt-0">
                        <ul className="ml-[-50px] list-none">
                            {messages?.map((message, index) => (
                            <li key={index} className="mb-[50px] float-left w-1/2 pl-[50px]">
                                <div className="list_inner w-full clear-both float-left h-auto relative">
                                    <div className="image relative overflow-hidden">
                                    </div>
                                    <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                                        <div className="extra flex items-center justify-between mb-[25px] relative">
                                        
                                        <div className="short">
                                            <p className="date font-montserrat text-[12px] text-[#767676]">
                                                From: {message.email}
                                                
                                            </p>
                                        </div>
                                        </div>
                                        <p className="font-montserrat text-[16px] text-[#141414] title mb-[10px] ">
                                            {message.subject}
                                        </p>
                                        <div className="tokyo_tm_read_more pt-8">
                                            <a href="#" onClick={() => openModal(message)}>
                                                <span>Read More</span>
                                            </a>
                                        </div>
                                        <span className="font-montserrat text-[12px] text-[#767676] absolute right-10 bottom-2">
                                        {new Date(message.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                        })}
                                        </span>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                        }
                        
                    </div> 
                </div>
            </div>
        </div>
        <MessageModal isOpen={isModalOpen} onClose={closeModal} message={selectedMessage} />
        </>
    )
}
