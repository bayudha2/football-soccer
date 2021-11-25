import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingpage/landingpage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={LandingPage()} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
