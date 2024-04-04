<<<<<<< HEAD
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

=======
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

>>>>>>> 2c8bb7fcdb80d0e7810c09128a84721b2470d6b0
export default App;
