import Home from "./pages/home/home";
import Header from "./components/Header/Header"
import React from 'react';
import {Route, Routes} from "react-router-dom";
import AddExpense from "./pages/add-expense/AddExpense";
import Footer from "./components/Footer/Footer";



function App() {
  return (
   <div> 
    <Header />
    
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path="/add-expense" exact element={<AddExpense />} />
    </Routes>
    
    <Footer />
    </div>
  );
}

export default App;
