// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { USERS_API_URL } from "../constants";

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   // const [users, setUsers] = useState();

//   // const getUsers = async () => {
//   //   try {
//   //     const resp = await axios.get(USERS_API_URL);
//   //     setUsers(resp.data);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getUsers();
//   // }, []);

//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const resp = await axios.get(ALL_USERS_API_URL);
//       setUsers(resp.data);
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getUser = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const resp = await axios.get(ONE_USER_API_URL.replace("([0-9]+)", id));
//       setUser(resp.data);
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createUser = async (newUser) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const resp = await axios.post(CREATE_USER_API_URL, newUser);
//       setUsers((prevUsers) => [...prevUsers, resp.data]);
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);


//   return (
//     <AppContext.Provider value={{ users, getUsers }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);

// export default AppProvider;



// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { ALL_USERS_API_URL, ONE_USER_API_URL, CREATE_USER_API_URL } from "../constants";

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getUsers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const resp = await axios.get(ALL_USERS_API_URL);
//       setUsers(resp.data);
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getUser = async (id) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const resp = await axios.get(ONE_USER_API_URL.replace("([0-9]+)", id));
//       setUser(resp.data);
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const createUser = async (newUser) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const resp = await axios.post(CREATE_USER_API_URL, newUser);
//       setUsers((prevUsers) => [...prevUsers, resp.data]);
//     } catch (err) {
//       setError(err);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <AppContext.Provider value={{ users, user, loading, error, getUsers, getUser, createUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);

// export default AppProvider;



import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { ALL_USERS_API_URL, ONE_USER_API_URL, CREATE_USER_API_URL } from "../constants";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await axios.get(ALL_USERS_API_URL);
      setUsers(resp.data);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await axios.get(ONE_USER_API_URL.replace("([0-9]+)", id));
      setUser(resp.data);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (newUser) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await axios.post(CREATE_USER_API_URL, newUser);
      setUsers((prevUsers) => [...prevUsers, resp.data]);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AppContext.Provider value={{ users, user, loading, error, getUsers, getUser, createUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
