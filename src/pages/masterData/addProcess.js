
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button } from 'react-bootstrap';

const addProcess = () => {
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
                            <Link href="./masterData">Master Data</Link> <span>Process</span>
                        </div>
                        <h2 className='page_heading'>Add Process</h2>
                    </div>
                    <div className='pageContents'>
                        <div className='formMain'>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col lg={4}>
                                        <Form.Group controlId="machineCode" className='form-group'>
                                            <Form.Label>Machine Code</Form.Label>
                                            <Form.Control {...register('machineCode', { required: 'Machine Code is required' })} />
                                            {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <Form.Group controlId="MachineName" className='form-group'>
                                            <Form.Label>Machine Name</Form.Label>
                                            <Form.Control {...register('MachineName', { required: 'Machine Name is required' })} />
                                            {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={4}>
                                        <Form.Group controlId="Operation" className='form-group'>
                                            <Form.Label>Operation</Form.Label>
                                            <Form.Control {...register('Operation', { required: 'Operation is required' })} />
                                            {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button type="submit">Next 
                                    <Image
                                    src="/img/icons/angle-right.svg"
                                    alt="Right Arrow Icon"
                                    className='btnRightArrow'
                                    width={15}
                                    height={10}
                                    priority
                                />
                                
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  );
};

export default addProcess;