import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row, Col, Button } from 'react-bootstrap';

const CreateUserForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md={6}>
          <Form.Group controlId="username" className='form-group'>
            <Form.Label>Username</Form.Label>
            <Form.Control {...register('username', { required: 'Username is required' })} />
            {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="email" className='form-group'>
            <Form.Label>Email</Form.Label>
            <Form.Control {...register('email', { required: 'Email is required' })} />
            {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
          </Form.Group>
        </Col>
      </Row>

      <Row>
  <Col md={6}>
    <Form.Group controlId="first_name" className='form-group'>
      <Form.Label>First Name</Form.Label>
      <Form.Control {...register('first_name', { required: 'First Name is required' })} />
      {errors.first_name && <Form.Text className="text-danger">{errors.first_name.message}</Form.Text>}
    </Form.Group>
  </Col>

  <Col md={6}>
    <Form.Group controlId="last_name" className='form-group'>
      <Form.Label>Last Name</Form.Label>
      <Form.Control {...register('last_name', { required: 'Last Name is required' })} />
      {errors.last_name && <Form.Text className="text-danger">{errors.last_name.message}</Form.Text>}
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
    <Form.Group controlId="phone_number" className='form-group'>
      <Form.Label>Phone Number</Form.Label>
      <Form.Control {...register('phone_number', { required: 'Phone Number is required' })} />
      {errors.phone_number && <Form.Text className="text-danger">{errors.phone_number.message}</Form.Text>}
    </Form.Group>
  </Col>
 </Row>

      <Row>
        <Col md={6}>
          <Form.Group controlId="role" className='form-group'>
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" {...register('role', { required: 'Role is required' })}>
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
              <option value="staff">Staff</option>
            </Form.Control>
            {errors.role && <Form.Text className="text-danger">{errors.role.message}</Form.Text>}
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
        </Col>
      </Row>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateUserForm;
