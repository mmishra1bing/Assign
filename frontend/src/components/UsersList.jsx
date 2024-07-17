
import { useEffect, useState } from 'react';
import { Table } from "reactstrap";

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/users/viewall')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <Table dark>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Document</th>
              <th>Phone</th>
              <th>Registration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!users || users.length <= 0 ? (
              <tr>
                <td colSpan="6" align="center">
                  <b>No user available, Try creating new one</b>
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.document}</td>
                  <td>{user.phone}</td>
                  <td>{user.registrationDate}</td>
                  <td></td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      );
};

export default UsersList;
