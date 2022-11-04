import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact--heading'>Contact</div>
      <div className='contact--summary'>
        In case of any queries or collabrations, please reach out to me on below
        contact information.
      </div>
      <div className='contact__details'>
        <div className='contact__details__mail'>
          <AiOutlineMail size={25} />
          <div className='contact__details__mail--info'>
            <a href='mailto:vikash9932@gmail.com'>vikash9932@gmail.com</a>
          </div>
        </div>
        <div className='contact__details__call'>
          <BiPhoneCall size={25} />
          <div className='contact__details__call--info'>
            <a href='tel:+91-8147250958'>+91-8147250958</a>
          </div>
        </div>
        <div className='contact__details__location'>
          <HiOutlineLocationMarker size={25} />
          <div className='contact__details__location--info'>India</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
