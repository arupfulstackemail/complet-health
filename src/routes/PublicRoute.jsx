import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from '../features/SignIn';
import Layouts from '../layouts';

const PublicRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}

export default PublicRoute