import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button } from 'react-bootstrap';

const management = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
      };
  return (
    <div>
        <Header />
        <div className="container">
            <div className='page_wrapp'>
                <div className='pageHeadingArea'>
                    <div className='breadcrumb_wrapp'>
                        <Link href="./masterData">User</Link> <span>User Management</span>
                    </div>
                    <div className='formCardMain'>
                        <Form onSubmit="">
                            <Row>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Part No.</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Contact Name</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Customer Name</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Street Address</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>City, State, Country, Zip</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Contact Phone</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Inquiry Date</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Quotation Due Date</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Part Description</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Quote No.</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Account Manager</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Program</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>SOP</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Model Year</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>OEM Customer</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Customer REQ No.</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>REVLevel</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Quote Revision</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Quote Date</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Material/Alloy Grade</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Temper</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Ship Weight</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Input Weight</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>PCS/Input</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>REV Date</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>EAV</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Year 1</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Year 2</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Year 3</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Year 4</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Year 5</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Year 6</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>

                    <div className='formCardMain formCardWithJead'>
                        <div className='formCardHeading'>Raw material Pricing</div>
                        <Form onSubmit="">
                            <Row>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Base Material Cost ($LB)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Conversion cost ($LB) CTL</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Freight Cost ($LB)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Hvy Scrap Devalue</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Purch Matl Cost $/PC</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Scrap Recovery</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Matl coast $/PC</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>LME Price</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Min QTY (Setup)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Part Geometry</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Cost of Proto’s</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Min, qty (ptotos)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                                <Col xl={3} lg={6} md={6}>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Proto Lead time</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>PPAP Lead time</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Dia / Length</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="companyCode" className='form-group horizontal-form-group'>
                                        <Form.Label>Terms</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className='formCardMain formCardWithJead'>
                        <div className='formCardHeading'>Process Cost</div>
                        <div className='verticalForm'>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Operation #</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Oper. Description</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label># of Dir. Labor</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>D. Labor Rate/HR</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Pcs/HR</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Efficiency (%)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Labor($/HR)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Burden ($/HR)</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Op Cost</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Cos thru this OP</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className='verticalFormSingle'>
                                <Form onSubmit="">
                                    <Form.Group controlId="companyCode" className='form-group'>
                                        <Form.Label>Notes/Comments</Form.Label>
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                        {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='saveWrapper'>
            <Button type="submit">Save</Button>
        </div>
        <Footer />
    </div>
  );
};

export default management;