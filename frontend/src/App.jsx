

import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CreateUserForm from './components/CreateUser';
import UsersList from './components/UsersList';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <NavLink to="/createUser">Create User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users">List of Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/CreateUser" element={<CreateUserForm />} />
                    <Route path="/users" element={<UsersList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

