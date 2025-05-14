import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookFilter from "./components/BookFilter";

function App() {
  return (
    <>
      <MyNav />
      <main>
        <Welcome />
        <BookFilter />
      </main>
      <MyFooter />
    </>
  );
}

export default App;
