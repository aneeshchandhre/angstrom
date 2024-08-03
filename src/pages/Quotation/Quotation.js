import React,{ useRef } from 'react';
import Image from "next/image";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from '@nextui-org/table';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const Quotation = () => {

    const printRef = useRef();

    const handlePrint = () => {
        const printContent = printRef.current.innerHTML;
        const win = window.open('', '', 'height=500,width=800');
        win.document.write('<html><head><title>Print</title>');
        win.document.write('<style>');
        win.document.write(`
            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        `);
        win.document.write(`
            body {
                font-family: "Inter", sans-serif;
                font-weight: 700;
          }
        `);
        win.document.write('</style>');
        win.document.write('</head><body>');
        win.document.write(printContent);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
      };

  return (
    <div>
        <Header/>
        <div style={{padding: '10px', textAlign: 'right', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', backgroundColor: '#fff'}}>
            <button onClick={handlePrint} style={{backgroundColor: '#025b7d', fontSize: '13px', padding: '8px 10px', borderRadius: '4px', minWidth: '100px', border: 'none', color: '#fff'}}>Print</button>
        </div>
        <div ref={printRef} style={{ width: '100%', minHeight: '100vh', backgroundColor: '#fff', padding: '10px' }}>
            <table aria-label="Example static collection table" style={{ width: '100%' }} cellPadding={0} cellSpacing={0}>
                <tbody>
                    <tr>
                        <td style={{ width: '50%' }}>
                            <Image
                                src="/img/qutation_logo.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={250}
                                height={37}
                                priority
                                />
                        </td>
                        <td style={{ width: '50%', verticalAlign: 'top', textAlign: 'right' }}>
                            <h1 style={{ color: '#ea141f',  margin: '20px 0 5px', lineHeight: '30px', textDecoration: 'none', fontSize: '44px', textTransform: 'uppercase', fontWeight: '700' }}>Quotation</h1>
                            <h6 style={{fontSize: '12px', color: '#333', margin: '0' }}>23/2/2018 12:00:00 AM</h6>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{height: '10px'}}></td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'left'}}>
                            <p style={{fontSize: '14px', margin: '0'}}>
                                To, <br/>
                                <strong>Gary McLaughlin</strong> <br/>
                                General Aluminum Mfg., Co. <br/>
                                6065 Parkland Blvd. <br/>
                                Cleveland, Ohio 44124 
                            </p>
                            <p style={{fontSize: '14px', margin: '10px 0'}}>Phone:  (440) 265-8615</p>
                            <p style={{fontSize: '14px', margin: '0'}}>E-mail:  gmclaughlin@generalaluminum.com</p>
                        </td>
                        <td style={{verticalAlign: 'center', textAlign: 'right'}}>
                            <table style={{width: '100%', float: 'right'}} cellPadding={0} cellSpacing={0}>
                                <tbody>
                                    <tr>
                                        <td style={{textAlign: 'left', padding: '0', border: '1px solid rgb(162 162 162)'}}>
                                            <p style={{borderBottom: '1px solid rgb(162 162 162)', padding: '10px 10px 5px', fontSize: '10px', margin: '0 0 8px', lineHeight: '10px'}}>Your Inquiry No.</p>
                                            <h4 style={{padding: '0px 10px 5px', fontSize: '12px', margin: '0', lineHeight: '12px'}}>RFQ #1</h4>
                                        </td>
                                        <td style={{textAlign: 'left', padding: '0', border: '1px solid rgb(162 162 162)'}}>
                                            <p style={{borderBottom: '1px solid rgb(162 162 162)', padding: '10px 10px 5px', fontSize: '10px', margin: '0 0 8px', lineHeight: '10px'}}>Quote No.</p>
                                            <h4 style={{padding: '0px 10px 5px', fontSize: '12px', margin: '0', lineHeight: '12px'}}>0011-18 Al Quote</h4>
                                        </td>
                                        <td style={{textAlign: 'left', padding: '0', border: '1px solid rgb(162 162 162)'}}>
                                            <p style={{borderBottom: '1px solid rgb(162 162 162)', padding: '10px 10px 5px', fontSize: '10px', margin: '0 0 8px', lineHeight: '10px'}}>Date of Inquiry</p>
                                            <h4 style={{padding: '0px 10px 5px', fontSize: '12px', margin: '0', lineHeight: '12px'}}>02/13/2018</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} style={{height: '20px'}}></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <p style={{fontSize: '10px', margin: '0 0 8px'}}>Thank you for the opportunity to quote your requirements.  Prices are current as of </p>
                                            <p style={{fontSize: '10px', margin: '0'}}>today and apply to quantities as quoted and ordered for manufacture and shipment at one time.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{height: '10px'}}></td>
                    </tr>
                </tbody>
            </table>
            
            <table aria-label="Example static collection table" style={{ width: '100%' }} cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr>
                        <th style={{textAlign: 'left', fontSize:'14px', backgroundColor: '#e1e1e1 !important', padding: '5px 15px',}}>ITEM NO.</th>
                        <th style={{textAlign: 'left', fontSize:'14px', backgroundColor: '#e1e1e1 !important', padding: '5px 15px'}} colSpan={4}>PROGRAM DESCRIPTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{width: '10%', minWidth: '100px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{width: '20%', minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>FLCA  Rev ORG</td>
                        <td style={{width: '20%', minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>Handed LH/RH Tooling Included</td>
                        <td style={{width: '20%', minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{width: '20%', minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>FLCA  Rev ORG</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>Handed LH/RH Tooling Included</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>Annual Volume</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>1,00,000</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>SOP Date</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>11/17/19</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>Alloy</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>6082 - T6</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{minWidth:'150px', fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px'}}><strong>1</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>PRODUCTION PRICING</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>Matl Cost $ / Pc</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>Pc Price</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>Tooling</strong></td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>Production</strong></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>$ 11.7073179638855</strong></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>$ 22.002</strong></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>$ 1,65,000</strong></td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{height: '25px'}}></td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>Estimated Gross Weight</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>8.337 Lb</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', verticalAlign: 'top'}}>U.S. Midwest prime Al price</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', verticalAlign: 'top'}}>$1.112 LB <p style={{fontSize: '9px'}}>Jan - 2018 Monthly Average</p></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', verticalAlign: 'top'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', verticalAlign: 'top'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>Order Qty.</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>5,000 Min</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px'}}><strong>2</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>PRODUCTION PRICING</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>&nbsp;</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>Pc Price</strong></td>
                        <td style={{backgroundColor: 'rgb(225 225 225)', fontSize:'13px', padding: '4px 15px', minWidth:'150px'}}><strong>Tooling</strong></td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>Production</strong></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>&nbsp;</strong></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>$ 22.002</strong></td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}><strong>$ 1,65,000</strong></td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>Order Qty.</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>50 Min</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>&nbsp;</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}}>&nbsp;</td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{height: '10px'}}></td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{height: '10px', borderTop: '1px solid #333'}}></td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px'}} colSpan={5}>
                            <p>Part may require design modifications to accomodate the forging process.  All engineering, quality specifications, and GD&T are to be mutually agreed upon prior to PPAP and SOP.</p>
                            <p>Prices as quoted are based on $$1.112  per pound U.S. Midwest prime aluminum transaction price @ LME = $$1.022  per pound.  Adjustments to be made quarterly based on prices as published in Platts Metals Week.  The price adjustment is pegged to net weight.</p>
                            <p>Prices in this quotation are subject to change at time of order placement due to fluctuation of energy prices.</p>
                            <p>The "Alumina Value Add" is net of scrap credit.</p>
                            <p>Price includes 100% etching (cleaning) and dye penetrant inspection. Price does not include x-ray inspection, shot blasting, machining or assembly. Pricing is based on customer supplied dunnage.</p>
                            <p>Price is subject to change for volume variation beyond +/-15% of RFQ volume.  Pricing is based on an estimated weight to be confirmed on PPAP parts prior to SOP.</p>
                            <p>Delivery of machined trimmed prototypes will be 16 weeks or less from receipt of purchase order and a mutually acceptable CAD model.  Die trimmed parts require an additional 24 weeks.  Production quantities will follow PPAP approval within a mutually acceptable time frame.</p>
                            <p>Prototype pricing applies to all parts shipped prior to receiving an approved PSW from the customer.</p>
                            <p>Tooling will be invoiced at 50% upon receipt of PO and 50% upon shipment of PPAP parts.</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{height: '0px'}}></td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', border: '1px solid #333'}} colSpan={2}>
                            <p style={{margin: '0'}}>SHIPPING  POINT: Greenwood, SC</p>
                        </td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', border: '1px solid #333'}}>FCA Alumina's Dock</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', border: '1px solid #333'}}>TERMS:  Net 45 days</td>
                        <td style={{fontSize:'12px', backgroundColor: '#fff', padding: '2px 15px', minWidth:'150px', border: '1px solid #333'}}>QUOTE VALID:  30 Days</td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{height: '10px', borderTop: '1px solid #333'}}></td>
                    </tr>
                    <tr>
                        <td colSpan={3} style={{padding: '0 15px'}}>
                            <p style={{fontSize: '10px', margin: '0 0 8px'}}>Please refer all orders or inquiries concerning this quotation to:</p>
                            <h4 style={{fontSize: '13px',  margin: '0 0 2px'}}>Alumina, LLC</h4>
                            <p style={{fontSize: '11px',  margin: '0 0 2px'}}>1508 Hwy. 246 South</p>
                            <p style={{fontSize: '11px',  margin: '0 0 0px'}}>Greenwood, SC  29646</p>
                        </td>
                        <td colSpan={2} style={{textAlign: 'right', padding: '0 15px'}}>
                            <p style={{fontSize: '13px',  margin: '0 0 2px'}}>Contact: <strong>Adel Khanfar</strong></p>
                            <p style={{fontSize: '11px',  margin: '0 0 0px'}}>Phone: 586-596-8834</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{height: '10px'}}></td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{backgroundColor: '#f7f7f7', padding: '10px', verticalAlign: 'bottom', padding: '8px 15px'}}>
                            <p style={{fontSize: '10px', margin: '0'}}>This is a quotation, not a contract.  All orders are subject to approval of the general sales office of Alumina.  Orders resulting from this quotation which are accepted and approved will be subject to the terms and conditions included herewith.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Footer/>
    </div>
  )
}

export default Quotation