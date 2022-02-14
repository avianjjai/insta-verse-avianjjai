import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from "./componets/Navbar/Navbar";
import { Home } from "./componets/Home/Home";
import { Auth } from "./componets/Auth/Auth";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='auth' element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;