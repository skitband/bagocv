import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const WorkModalComponent = ({id, isModalOpen, onClose, contentData}) => {

    const selectedItem = contentData.find(item => item.id === id);

    if (!selectedItem) {
        return null;
    }

    const { companyName, mainTitle, descriptions, date } = selectedItem;

    return (
        <div className={`tokyo_tm_modalbox ${isModalOpen ? 'opened' : ''}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => onClose(false)}>
            <FontAwesomeIcon icon={faClose}/>
          </a>
        </div>
        <div className="description_wrap">
            <div className="details">
                <div className="extra">
                <div className="short">
                    <p className="date">
                        <a href="#">{companyName}</a> 
                    </p>
                </div>
                </div>
                <h3 className="title">
                {mainTitle}
                </h3>
                <span className='text-sm italic'>{date}</span>
                <div className="tokyo_tm_read_more">
                <a href="#">
                    <span>Read More</span>
                </a>
                </div>
            </div>
            <div className="main_content">
                <div className="descriptions text-justify">
                <ul>
                    {descriptions.map((paragraph, index) => (
                        <li key={index}>{paragraph}</li>
                    ))}
                </ul>
                </div>
            </div>
        </div>

      </div>
    </div>

    )
}

export default WorkModalComponent