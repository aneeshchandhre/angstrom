import Image from "next/image";
import Link from "next/link";
import React from 'react';
 
const Header = () => { 
  return (
    <header>
        <div className='container'>
            <div className='header_wrapp'>
                <div className='logo_wrapp'>
                    <Image
                        src="/img/logo_main.svg"
                        alt="Angstrom Logo"
                        className='main_logo'
                        width={200}
                        height={50}
                        priority
                    />
                </div>
                <div className="menu_wrapp">
                    <nav>
                        <ul>
                            <li><Link href="./">Dashboard</Link></li>
                            <li><Link href="./" className="active">Master Data</Link></li>
                            <li><Link href="./">Calculate Costing</Link></li>
                        </ul>
                    </nav>
                    <div className="user_data_wrapper">
                        <div className="user_data_main">
                            <div className="user_data_avatar">AJ</div>
                            <div className="user_data_name_det">
                                <div className="user_data_name">Antony John</div>
                                <div className="user_design">Super Admin</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header;