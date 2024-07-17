// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ONE_USER_API_URL } from '../constants';

// function UserDetail({ userId }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchUser() {
//       try {
//         const { data } = await axios.get(ONE_USER_API_URL.replace('([0-9]+)', userId));
//         setUser(data);
//       } catch (error) {
//         console.error(`Failed to fetch user with ID ${userId}`, error);
//       }
//     }

//     fetchUser();
//   }, [userId]);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>User Details</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Document: {user.document}</p>
//       <p>Phone: {user.phone}</p>
//       <p>Registration Date: {user.registrationDate}</p>
//     </div>
//   );
// }

// export default UserDetail;


import { useEffect, useState } from 'react';
import axios from 'axios';
import { USER_API_URL } from '../constants'; // Assuming this is the API endpoint for a single user

function UserDetail({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const { data } = await axios.get(`${USER_API_URL}/${userId}`);
        setUser(data);
      } catch (error) {
        console.error(`Failed to fetch user ${userId}`, error);
      }
    }

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading user details...</div>;
  }

  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Document: {user.document}</p>
      <p>Phone: {user.phone}</p>
      <p>Registration Date: {user.registrationDate}</p>
    </div>
  );
}

export default UserDetail;

