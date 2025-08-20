import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
