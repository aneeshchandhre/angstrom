
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button } from 'react-bootstrap';

const addCompany = () => {
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
                            <Link href="./masterData">Master Data</Link> <span>Company</span>
                        </div>
                        <h2 className='page_heading'>Add Company</h2>
                    </div>
                    <div className='pageContents'>
                        <div className='formMain'>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="companyCode" className='form-group'>
                                            <Form.Label>Company Code</Form.Label>
                                            <Form.Control {...register('companyCode', { required: 'Company Code is required' })} />
                                            {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="CompanyName" className='form-group'>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control {...register('Company Name', { required: 'Company Name is required' })} />
                                            {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="address" className='form-group'>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control as="textarea" rows={3} {...register('address', { required: 'Address is required' })} />
                                        {errors.address && <Form.Text className="text-danger">{errors.address.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="status" className='form-group'>
                                            <Form.Label>Status</Form.Label>
                                            <Form.Control as="select" {...register('status', { required: 'Status is required' })}>
                                            <option value="">Select Status</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                            <option value="blocked">Blocked</option>
                                            </Form.Control>
                                            {errors.status && <Form.Text className="text-danger">{errors.status.message}</Form.Text>}
                                        </Form.Group>
                                        <Form.Group controlId="CompanyName" className='form-group'>
                                            <Form.Label>Company Name</Form.Label>
                                            <Form.Control {...register('Company Name', { required: 'Company Name is required' })} />
                                            {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  );
};

export default addCompany;