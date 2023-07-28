import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import ThemeWrapper from "./components/ThemeWrapper";
import Todos from "./components/Todos/Todos";
import ThemeProvider from "./context/themeContext";
import React from "react";
import store from "./redux/store";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <ThemeWrapper>
          <main className="App">
            <h1>My Todos</h1>
            <AddTodo></AddTodo>
            <Todos></Todos>
          </main>
        </ThemeWrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
