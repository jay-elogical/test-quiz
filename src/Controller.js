import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserDetails from './Screens/user_details/UserDetails';
import Test from './Screens/test/Test';



function Controller() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Test />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Controller;
