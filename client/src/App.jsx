import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./Pages/home/Home";
import Welcome from "./Pages/welcome/Welcome";
import { Fragment, useState } from "react";
import { useEffect } from "react";

function App() {
  const [isLogged, setIsLogged] = useState();

  window.addEventListener("storage", async function () {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")));
  });

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")));
  }, []);

  console.log(isLogged);

  return (
    <Fragment>
      <Routes>
        <Route exact path="/home" element={isLogged ? <Home /> : <Welcome />} />
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </Fragment>
  );
}

export default App;
