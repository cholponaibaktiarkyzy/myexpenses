import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Card from "./Card";

const ExpensesItem = (props) => {
  const { date, title, price } = props;

  let title2 = props.title;

  const changeTitle = () => {
    title2 = "Изменили!!!";
    console.log(title2);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h1>{title2}</h1>{" "}
      </div>
      <div className="expense-item__price">${price}</div>
      <button onClick={changeTitle}>Change name</button>
    </Card>
  );
};

export default ExpensesItem;
