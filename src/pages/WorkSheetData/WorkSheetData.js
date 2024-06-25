import React from "react";
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
                `</div>
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
