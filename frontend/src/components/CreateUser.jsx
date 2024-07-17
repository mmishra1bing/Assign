import { useState } from 'react';
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
                alert('User created successfully!');
                // Optionally, reset the form
                setFormData({
                    name: '',
                    email: '',
                    document: '',
                    phone: ''
                });

                    // Navigate to viewall page
                    window.location.href = 'http://localhost:8000/api/users/viewall'; // Change the URL as per your route

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
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Document:
                    <input type="text" name="document" value={formData.document} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default CreateUserForm;
