import { useState, useEffect } from 'react';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:5173/api/users/viewall');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Document:</strong> {user.document} <br />
                        <strong>Phone:</strong> {user.phone} <br />
                        <strong>Registration Date:</strong> {user.registrationDate} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;

