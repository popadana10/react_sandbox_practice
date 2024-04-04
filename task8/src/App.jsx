import { useState } from "react";
import Form from "./Form";
import View from "./View";
import "./styles.css";

const App = () => {
  const [details, setDetails] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <main>
      <h1>Forms and User Input</h1>
      <Form handleChange={handleChange} />
      <View details={details} />
    </main>
  );
};

export default App;
