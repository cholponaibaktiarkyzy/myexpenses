import ExpensesItem from "./components/ExpensesItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

// const dataBox = [
//   {
//     title: "Car Insurance",
//     price: 200,
//     date: new Date(2022, 1, 4),
//   },
//   {
//     title: "Book",
//     price: 300,
//     date: new Date(2022, 7, 26),
//   },
//   {
//     title: "Internet",
//     price: 500,
//     date: new Date(2021, 0, 3),
//   },
// ];

function App() {
  const [expensesList, setExpensesList] = useState([]);

  const addNewExpense = (newExpense) => {
    setExpensesList([newExpense, ...expensesList]);
  };

  return (
    <div>
      <NewExpense addExpense={addNewExpense} />
      <Expenses allExpenses={expensesList} />
    </div>
  );
}

export default App;
