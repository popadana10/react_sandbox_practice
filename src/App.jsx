
import "./styles.css";

export const userData = {
  firstName: "Dana",
  lastName: "Popa",
  title: "student",
};

export function User() {
  return (
    <div className="card">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <User />
    </div>
  );
}


import ParentComponent from "./ParentComponent";
import "./styles.css";

const App = () => {
  return (
    <main>
      <h1>My first React app</h1>
      <ParentComponent />
    </main>
  );
};

export default App;
