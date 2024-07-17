import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import axios from 'axios';
// import { CREATE_USER_API_URL } from '../constants';

const CreateUserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        document: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('User created successfully, Visit UsersList, to view it!');
                // Optionally, reset the form
                setFormData({
                    name: '',
                    email: '',
                    document: '',
                    phone: ''
                });

                    // Navigate to viewall page
                    // window.location.href = 'http://localhost:8000/api/users/viewall'; // Change the URL as per your route

            } else {
                alert('Failed to create user');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user');
        }
    };

    return (
        <div>
        <h2>Create User</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
              style={{ width: '500px' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
              style={{ width: '500px' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="document">Document:</Label>
            <Input
              type="text"
              name="document"
              required
              onChange={handleChange}
              value={formData.document}
              style={{ width: '500px' }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input
              type="number"
              name="phone"
              required
              onChange={handleChange}
              value={formData.phone}
              style={{ width: '500px' }}
            />
          </FormGroup>
          <Button >Create User</Button>
        </Form>
        </div>
      );
};

export default CreateUserForm;
