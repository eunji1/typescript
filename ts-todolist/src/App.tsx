import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import ThemeWrapper from "./components/ThemeWrapper";
import Todos from "./containers/Todos";
import ThemeProvider from "./context/themeContext";
import TodoProvider from "./context/todoContext";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className="App">
            <h1>My Todos</h1>
            <AddTodo></AddTodo>
            <Todos></Todos>
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
