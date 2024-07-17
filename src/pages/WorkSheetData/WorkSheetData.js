import React from "react";
import Image from "next/image"; 
import Link from "next/link";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useForm } from "react-hook-form";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
const WorkSheetData = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="page_wrapp">
          <div className="pageHeadingArea">
            <div className="breadcrumb_wrapp">
              <Link href="./masterData">Worksheet</Link>
              <span>Worksheet</span>
            </div>
            {/* <h2 className='page_heading'>Worksheet</h2> */}
            <div className="worksheetMain">
              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Heading</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="worksheetTable">
                    <tbody>
                      <tr>
                        <td className="labelArea minTD">Part Description:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Front Lower Control arm"} disabled />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Part #</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"FLCA"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Rev. Level:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"ORG"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Rev. Date:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"NONE"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Contact Name:</td>
                        <td className="labelArea maxTD selectTd">
                          <Form.Group
                            controlId="partNumber"
                            className="form-group"
                          >
                            <Form.Select className="form-control">
                              <option>Andrew Skuza</option>
                              <option>Thomas Jung</option>
                              <option>Katsu Nakajima</option>
                              <option>Kurt McGaha</option>
                              <option>Anja Gurnig</option>
                              <option>Avak Garibyan</option>
                              <option>Bruce Christenson</option>
                              <option>Kevin Guerra</option>
                              <option>Brian Salat</option>
                              <option>Laird “Larry” Kroepel</option>
                              <option>Sean Gomillion</option>
                              <option>John B. Dwyer</option>
                              <option>Bettina Spickelmeir</option>
                              <option>Imran Kakli</option>
                              <option>Jason Benoit</option>
                              <option>Larry Tabaka</option>
                              <option>David Sherwood</option>
                              <option>Mike Krzysiak</option>
                              <option>Daniel Godos</option>
                              <option>Nick Price</option>
                              <option>Ross Richards</option>
                              <option>Tim Penn</option>
                              <option>Venkat Bonda</option>
                              <option>Chrissy Cheav</option>
                              <option>James Snyder</option>
                              <option>Von Beal</option>
                              <option>Solanye Medeiros</option>
                              <option>Monica Green</option>
                              <option>Adam Mesarosh III</option>
                              <option>Sebastian Hoppe</option>
                              <option>Joe Cerri</option>
                              <option>Matt Baldwin</option>
                              <option>Linda Hoffer</option>
                              <option>Marcus Ernsting</option>
                              <option>Matt Rose</option>
                              <option>Charles Gu</option>
                              <option>Ivan Vazquez</option>
                              <option>Sachin Bhatia</option>
                              <option>Daphne Hong Qiu</option>
                              <option>Thomas Hughes</option>
                              <option>Shawn Lange</option>
                              <option>Christopher Conley</option>
                              <option>Mike Rote</option>
                              <option>Angelika Berner</option>
                              <option>Veronike Antusakova</option>
                              <option>Mary McCauley</option>
                              <option>Johnny Renner</option>
                              <option>Jim Czerwinski</option>
                              <option>Josh Anderson</option>
                              <option>Jason Thurow</option>
                              <option>Brett Anderson</option>
                              <option>Mark Telander</option>
                              <option>Jeannette Tieno</option>
                              <option>Raymond Cull</option>
                              <option>Todd Frazier</option>
                              <option>Stephen Pegrum</option>
                              <option>Gary McLaughlin</option>
                            </Form.Select>
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Quote No.:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"0011-18 Al Quote"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Quote Rev:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"ORG"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">EAV:</td>
                        <td className="valueArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Customer Name:</td>
                        <td className="labelArea maxTD autoPopulated">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"Emerald Automotive"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Acct. Mgr.:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"Bryan Klis"} />
                          </Form.Group>
                          </td>
                        <td className="labelArea minTD">Quote Date:</td>
                        <td className="labelArea maxTD dateTd">
                          <Form.Group controlId="flcaDate" className='form-group datePiker'>
                            <Form.Control type="date" />
                          </Form.Group>
                          </td>
                        <td className="labelArea minTD">Year 1</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">1 Endeavour Drive</td>
                        <td className="labelArea maxTD autoPopulated">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"1 Endeavour Drive"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Program:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"unknown"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Matl/Alloy Grade</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"2014"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Year 2</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">City, State, Country, Zip:</td>
                        <td className="labelArea maxTD autoPopulated">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"Basildon SS14 3WF"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">SOP:</td>
                        <td className="labelArea maxTD dateTd">
                          <Form.Group controlId="flcaDate" className='form-group datePiker'>
                            <Form.Control type="date" />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Temper</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"T6"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Year 3</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Contact Phone:</td>
                        <td className="labelArea maxTD autoPopulated">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"+44 1268 247900"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Model Year:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="flcaDate" className='form-group'>
                            <Form.Control value="2020" />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Ship weight</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"6.253"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Year 4</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Contact Email:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"Stephen.Pegrum@emeraldautomotive.com"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Contract Period:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="flcaDate" className='form-group'>
                            <Form.Control value="5" />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Input weight</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"8.337"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Year 5</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Inquiry Date:</td>
                        <td className="labelArea maxTD dateTd">
                          <Form.Group controlId="flcaDate" className='form-group datePiker'>
                            <Form.Control type="date" />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">OEM Customer:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="flcaDate" className='form-group'>
                            <Form.Control value="Unknown" />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD"># of pcs / Input Wt</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"1"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Year 6</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Quote Due Date:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"asap"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Customer RFQ #:</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="flcaDate" className='form-group'>
                            <Form.Control value="RFQ #1" />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Material Yield (%)</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"75.00%"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Year 7</td>
                        <td className="labelArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            
              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Raw Material Pricing</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="worksheetTable">
                    <tbody>
                      <tr>
                        <td className="labelArea minTD">Base Material Cost ($/Lb)</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"1.11232"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Purch Matl Cost $ / PC</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"13.4414811140864"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Min Qty (setup)</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"5000"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Scrap Rate</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"NONE"} />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td className="labelArea minTD">Contact Name:</td>
                        <td className="labelArea maxTD">
                          <Form.Group
                            controlId="partNumber"
                            className="form-group"
                          >
                            <Form.Select className="form-control">
                              <option>Andrew Skuza</option>
                              <option>Thomas Jung</option>
                              <option>Katsu Nakajima</option>
                              <option>Kurt McGaha</option>
                              <option>Anja Gurnig</option>
                              <option>Avak Garibyan</option>
                              <option>Bruce Christenson</option>
                              <option>Kevin Guerra</option>
                              <option>Brian Salat</option>
                              <option>Laird “Larry” Kroepel</option>
                              <option>Sean Gomillion</option>
                              <option>John B. Dwyer</option>
                              <option>Bettina Spickelmeir</option>
                              <option>Imran Kakli</option>
                              <option>Jason Benoit</option>
                              <option>Larry Tabaka</option>
                              <option>David Sherwood</option>
                              <option>Mike Krzysiak</option>
                              <option>Daniel Godos</option>
                              <option>Nick Price</option>
                              <option>Ross Richards</option>
                              <option>Tim Penn</option>
                              <option>Venkat Bonda</option>
                              <option>Chrissy Cheav</option>
                              <option>James Snyder</option>
                              <option>Von Beal</option>
                              <option>Solanye Medeiros</option>
                              <option>Monica Green</option>
                              <option>Adam Mesarosh III</option>
                              <option>Sebastian Hoppe</option>
                              <option>Joe Cerri</option>
                              <option>Matt Baldwin</option>
                              <option>Linda Hoffer</option>
                              <option>Marcus Ernsting</option>
                              <option>Matt Rose</option>
                              <option>Charles Gu</option>
                              <option>Ivan Vazquez</option>
                              <option>Sachin Bhatia</option>
                              <option>Daphne Hong Qiu</option>
                              <option>Thomas Hughes</option>
                              <option>Shawn Lange</option>
                              <option>Christopher Conley</option>
                              <option>Mike Rote</option>
                              <option>Angelika Berner</option>
                              <option>Veronike Antusakova</option>
                              <option>Mary McCauley</option>
                              <option>Johnny Renner</option>
                              <option>Jim Czerwinski</option>
                              <option>Josh Anderson</option>
                              <option>Jason Thurow</option>
                              <option>Brett Anderson</option>
                              <option>Mark Telander</option>
                              <option>Jeannette Tieno</option>
                              <option>Raymond Cull</option>
                              <option>Todd Frazier</option>
                              <option>Stephen Pegrum</option>
                              <option>Gary McLaughlin</option>
                            </Form.Select>
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Quote No.:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"0011-18 Al Quote"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">Quote Rev:</td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"ORG"} />
                          </Form.Group>
                        </td>
                        <td className="labelArea minTD">EAV:</td>
                        <td className="valueArea maxTD">
                          <Form.Group controlId="companyCode" className="form-group">
                            <Form.Control defaultValue={"100000"} />
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> 

              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Purchased Components</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="verticalTable">
                    <thead>
                      <tr>
                        <th className="min-column">Part No.</th>
                        <th className="max-column">Part Description</th>
                        <th className="min-column">Nt. Wt (ib)</th>
                        <th className="min-column">Gross Wt. (ib)</th>
                        <th className="min-column">Piece Price ($)</th>
                        <th className="min-column">Pieces Assy</th>
                        <th className="min-column">Mark Up</th>
                        <th className="min-column">3%</th>
                        <th className="min-column">Freight/Pc</th>
                        <th className="min-column">Price</th>
                        <th className="">Notes/Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                      </tr>
                      <tr className="lastRow">
                        <td colSpan={7} className="border-none"></td>
                        <td colSpan={2}>
                          <div className="total-price total-price-td">
                            Total Purchased Price
                          </div>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="border-none">
                          <div className="add-delete">
                            <button class="saveBtn">Add</button>
                            {/* <button class="saveBtn">Delete</button> */}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Process Coast</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="verticalTable">
                    <thead>
                      <tr>
                        <th className="min-column">Part No.</th>
                        <th className="max-column">Part Description</th>
                        <th className="min-column">Nt. Wt (ib)</th>
                        <th className="min-column">Gross Wt. (ib)</th>
                        <th className="min-column">Piece Price ($)</th>
                        <th className="min-column">Pieces Assy</th>
                        <th className="min-column">Mark Up</th>
                        <th className="min-column">3%</th>
                        <th className="min-column">Freight/Pc</th>
                        <th className="min-column">Price</th>
                        <th className="max-column">Notes/Comments</th>
                        <th className="min-column">Actual Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} disabled />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr className="lastRow">
                        <td colSpan={7} className="border-none"></td>
                        <td colSpan={2}>
                          <div className="total-price total-price-td">
                            {/* Total Purchased Price */}
                          </div>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"$ 4.42"} />
                          </Form.Group>
                        </td>
                        <td className="border-none">
                          <div className="add-delete">
                            <button class="saveBtn">Add</button>
                            {/* <button class="saveBtn">Delete</button> */}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Secondary Process / Subcontracting / Outside Process Costs</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="verticalTable">
                    <thead>
                      <tr>
                        <th className="min-column"></th>
                        <th className="max-column">Operation Description</th>
                        <th className="min-column">Pcs/Hr</th>
                        <th className="min-column">Efficiency (%)</th>
                        <th className="min-column">Gaging</th>
                        <th className="min-column">Tooling</th>
                        <th className="min-column">Cost1</th>
                        <th className="min-column">Cost2</th>
                        <th className="min-column">Op Cost.</th>
                        <th className="min-column">Cost thru this op</th>
                        <th className="max-column">Notes/Comments</th>
                        <th className="min-column">Actual Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"70"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD bg-dark-blue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Etch"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"600"}  />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"90%"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"59.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"73.1"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"0.3"} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"$ 16.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"540"} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"70"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD bg-dark-blue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Etch"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"600"}  />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"90%"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"59.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"73.1"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"0.3"} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"$ 16.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"540"} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"70"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD bg-dark-blue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Etch"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"600"}  />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"90%"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"59.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"73.1"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"0.3"} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"$ 16.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"540"} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>             

              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Miscellaneous Costs</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="verticalTable">
                    <thead>
                      <tr>
                        <th className="min-column"></th>
                        <th className="max-column"></th>
                        <th className="min-column"></th>
                        <th className="min-column"></th>
                        <th className="min-column">Gaging</th>
                        <th className="min-column">Tooling</th>
                        <th className="min-column">Cost1</th>
                        <th className="min-column">Cost2</th>
                        <th className="min-column">Op Cost.</th>
                        <th className="min-column">Cost thru this op</th>
                        <th className="max-column">Notes/Comments</th>
                        <th className="min-column">Actual Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"70"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD bg-dark-blue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Etch"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"600"}  />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"90%"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"59.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"73.1"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"0.3"} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"$ 16.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"540"} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"70"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD bg-dark-blue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Etch"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"600"}  />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"90%"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"59.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"73.1"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"0.3"} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"$ 16.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"540"} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"70"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD bg-dark-blue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"Etch"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"600"}  />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"90%"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"59.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"73.1"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"0.3"} disabled />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"$ 16.8"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea maxTD">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={"540"} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>             

              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Tooling Costs</h2>
                  <button className="saveBtn">Save</button>
                </div>
                <div className="table-responsive">
                  <table className="verticalTable">
                    <thead>
                      <tr>
                        <th className="min-column">Oper. #</th>
                        <th className="max-column">Tooling Description</th>
                        <th className="min-column">Tooling Cost ($)</th>
                        <th className="min-column text-center">Spare/Repl'nt <br/>Cost ($)</th>
                        <th className="min-column text-center">Gaging/Insp.Fixt. <br/>Cost ($)</th>
                        <th className="min-column">Total Tooling $</th>
                        <th className="max-column text-center">Capital ($) <br/>Amount</th>
                        <th className="min-column text-center">Capt'l Amort'n <br/>(if req'rd) $/pc</th>
                        <th className="min-column text-center">Capital <br/>Description</th>
                        <th className="max-column">Notes/comments</th>
                        <th className="min-column">Prototype Tooling</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>  
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"-"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>  
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"-"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                        </td>
                        <td className="valueArea">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group"
                          >
                            <Form.Control defaultValue={""} />
                          </Form.Group>
                          <button className="trashIcon">
                            <Image
                                src="/img/trash.png"
                                alt="Angstrom Logo"
                                className='main_logo'
                                width={18}
                                height={18}
                                priority
                            />
                          </button>
                        </td>
                      </tr>
                      <tr className="lastRow">  
                        <td colSpan={5} className="valueArea">
                          <h6 className="totlaHead text-right">Total Tooling</h6>
                        </td>
                        <td className="valueArea lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"-"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea lightBlue">
                          <div className="form-label-text">
                            <h6 className="totlaHead text-right">Total Captal</h6>
                            <Form.Group
                              controlId="companyCode"
                              className="form-group priceInput"
                              >
                              <Form.Control defaultValue={"-"} />
                            </Form.Group>
                            </div>  
                        </td>
                        <td className="valueArea lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"-"} />
                          </Form.Group>
                        </td>
                        <td className="valueArea"></td>
                        <td className="valueArea"></td>
                        <td className="valueArea lightBlue">
                          <Form.Group
                            controlId="companyCode"
                            className="form-group priceInput"
                          >
                            <Form.Control defaultValue={"-"} />
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="worksheetSingle">
                <div className="worksheetHeader">
                  <h2 className='page_heading'>Margins and Productivity information</h2>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="table-responsive">
                      <table className="verticalTable">
                        <thead>
                          <tr>
                            <th className="max-column">Mark ups</th>
                            <th className="">Calculation</th>
                            <th className="max-column"></th>
                            <th className=""></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr> 
                            <td>R/M and Components Markup</td>
                            <td className="valueArea lightBlue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"3.0%"} />
                              </Form.Group>
                            </td>
                            <td>YoY Productivity</td>
                            <td className="valueArea bg-dark-blue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"No"} />
                              </Form.Group>
                            </td>
                          </tr>
                          <tr> 
                            <td>SGA %</td>
                            <td className="valueArea lightBlue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"6.0%"} />
                              </Form.Group>
                            </td>
                            <td>Productivity Giveback %</td>
                            <td className="valueArea lightBlue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"2.00%"} />
                              </Form.Group>
                            </td>
                          </tr>
                          <tr> 
                            <td>PROFIT %</td>
                            <td className="valueArea lightBlue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"50.0%"} />
                              </Form.Group>
                            </td>
                            <td>YoY Based on</td>
                            <td className="valueArea bg-dark-blue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"VA Only"} />
                              </Form.Group>
                            </td>
                          </tr>
                          <tr> 
                            <td>Sales Commission</td>
                            <td className="valueArea lightBlue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"0.0%"} />
                              </Form.Group>
                            </td>
                            <td>YoY Productivity Years</td>
                            <td className="valueArea bg-dark-blue">
                              <Form.Group
                                controlId="companyCode"
                                className="form-group"
                              >
                                <Form.Control defaultValue={"0"} />
                              </Form.Group>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkSheetData;
