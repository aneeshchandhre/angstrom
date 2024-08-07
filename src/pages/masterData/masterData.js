
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import { jsonData } from './data';
import Menu from './Menu';

const masterData = () => {

  return (
    <div>
        <Header />
            <div className="container">
                <div className='page_wrapp'>
                    <h2 className='page_heading'>Master Data</h2>
                    <div className='subMenusWrapper'>
                        {jsonData.map((item) => (
                            <Menu key={item.id} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  );
};

export default masterData;