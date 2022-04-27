import ExpensesItem from "./components/ExpensesItem";
import Expenses from "./components/Expenses";

function App() {
  const dataBox = [
    {
      title: "Car Insurance",
      price: 200,
      date: new Date(2022, 1, 4),
    },
    {
      title: "Book",
      price: 300,
      date: new Date(2022, 7, 26),
    },
    {
      title: "Internet",
      price: 500,
      date: new Date(2021, 0, 3),
    },
  ];

  const sum = (a, b) => {
    return a + b;
  };

  sum(3, 5);

  return (
    <div>
      <Expenses data={dataBox} />
    </div>
  );
}

export default App;
