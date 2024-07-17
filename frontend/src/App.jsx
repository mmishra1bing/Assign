
// // import "./App.css";
// // import AppProvider from "./context/AppContext";
// // import Home from "./components/Home";

// // function App() {
// //   return (
// //     <AppProvider>
// //       <div className="App">
// //         <Home />
// //       </div>
// //       ;
// //     </AppProvider>
// //   );
// // }

// // export default App;



// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
// import CreateUser from './components/CreateUser';
// import { AppProvider } from './context/AppContext';

// function App() {
//   return (
//     <AppProvider>
//       <div className="App">
//         <CreateUser />
//       </div>
//     </AppProvider>
//   );
// }

// export default App;


import React from 'react';
import CreateUserForm from './components/CreateUser';
import UsersList from './components/UsersList';

const App = () => {
    const [viewUsers, setViewUsers] = React.useState(false);

    const handleCreateSuccess = () => {
        // After successful user creation, navigate to view users
        setViewUsers(true);
    };

    return (
        <div>
            {!viewUsers && <CreateUserForm onCreateSuccess={handleCreateSuccess} />}
            {viewUsers && <UsersList />}
        </div>
    );
};

export default App;
