
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export const masterData = [
    {}
];


const masterData = () => {

  return (
    <div>
        <Header />
            <div className="container">
                <div className='page_wrapp'>
                    <h2 className='page_heading'>Master Data</h2>
                    <div className='subMenusWrapper'>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon01.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>
                                Company Category
                            </div>
                        </Link>
                        <Link href='./addCompany' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon02.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>
                                Company
                            </div>
                        </Link>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon03.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>User Management</div>
                        </Link>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon04.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>Meterial(Part)</div>
                        </Link>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon05.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>Operation</div>
                        </Link>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon06.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>Meterial Type</div>
                        </Link>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon07.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>Process</div>
                        </Link>
                        <Link href='/' className='subMenu'>
                            <span className='subMenuIcon'>
                            <Image
                                src="/img/icons/masterDataIcon08.svg"
                                alt="Master Data Icon"
                                className='masterDataIcon'
                                width={25}
                                height={22}
                                priority
                            />
                            </span>
                            <div className='subMenuContent'>Machine</div>
                        </Link>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  );
};

export default masterData;