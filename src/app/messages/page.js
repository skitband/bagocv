"use client"

import { MessagesComponent } from '../components/MessagesComponent';

const MessagesContainer = () => {
    
  return (
    <main className="tokyo_tm_all_wrap bg-[#f8f8f8]">
      <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
        <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
          <MessagesComponent />
        </div>
      </div>
    </main>
  )
}

export default MessagesContainer