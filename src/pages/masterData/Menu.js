import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Menu = ({ image, title }) => {
  return (
    <>

    
        <div className='subMenu'>
            <span className='subMenuIcon'>
                <Image src={image} alt={image} className='masterDataIcon' width={25} height={22} />
            </span>
            <div className='subMenuContent'>{title}</div>
        </div>  
    </>
  )
}

export default Menu