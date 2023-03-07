import React from "react";
import "./Card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/constants/ProductAction";


const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  }
  return (
    <div
      className="card"
      style={{ borderRadius: `6px solid ${item.category.color}` }}
    >
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>

      <div className="card-right">
        <div >
          <label className="card-amount">${item.amount}</label>
        </div>
        <div className="delete-icon" onClick = {handleDelete}>
        <i class="fi fi-rr-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
