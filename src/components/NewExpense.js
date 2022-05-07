import { useState } from "react";
import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
  const [title, setTitle] = useState("New Item");
  const [date, setDate] = useState("Date");
  const [amount, setAmount] = useState(0);


  //переменная состояния
  // функция обновления

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const amountHandler = (sobytie) => {
    setAmount(sobytie.target.value);
  };

  const saveExpense = (e) => {
    e.preventDefault();

    const newExpenseData = {
      newTitle: title,
      newDate: new Date(date),
      newAmount: amount,
    };

    addExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <form onSubmit={saveExpense}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountHandler} />
          </div>
          <div className="new-expense__actions">
            <button>Cancel</button>
            <button type="submit">Add new expense</button>
          </div>
        </div>
      </form>
      {/*<h1>{title}</h1>*/}
      {/*<h1>{date}</h1>*/}
      {/*<h4>{amount}</h4>*/}
    </div>
  );
};

export default NewExpense;
