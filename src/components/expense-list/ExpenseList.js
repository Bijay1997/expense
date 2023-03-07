import React from "react";
import "./ExpenseList.css";
import Card from "./Card";
import { useSelector } from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter(item=> item.title.includes(query))
  const notifySuccess = () => toast.success("Expense Deleted");

  return (
    <div className="expense-list">
      <ToastContainer 
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        
      />
      {filteredList.length ? (
        filteredList.map((item) => <Card item={item} notifySuccess={notifySuccess}/>)
      ) : (
        <div>
          <label> Uh oh! Your expense list is empty</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
