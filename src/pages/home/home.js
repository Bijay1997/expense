import React from 'react';
import "./home.css"
import Topfold from '../../components/Topfold/Topfold';
import ExpenseList from '../../components/expense-list/ExpenseList';

const Home = () => {
  return (
    <div className ="home">
    <Topfold />
    <ExpenseList />
    </div>
  )
}

export default Home