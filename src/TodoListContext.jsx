import { createContext } from "react";
import { useReducer } from "react";

export const TodoListContext = createContext(null);
//children används för att rendera alla element under denna
function TodoListContextProvider({ children }) {
  //useReducer tar två argument, en funktion som ska hantera anropen och en annan initial state.
  const [todoList, todoListDispatcher] = useReducer(todoListReducer, [
    "ta hand om disken",
  ]);
  //context skickar med två värden, listan och listans dispatcher
  //skickar man med dispatchern kan man ändar på listan varifrån som helst i applikationen
  return (
    <TodoListContext.Provider
      value={{ list: todoList, dispatch: todoListDispatcher }}
    >
      {children}
    </TodoListContext.Provider>
  );
}

const todoListReducer = (todoList, action) => {
  console.log(todoList, action);
  // vi har ett case för "added". Man kan lägga till fler case om man vill.
  switch (action.type) {
    case "added":
      return [...todoList, action.payload];
    default:
      throw new Error("unknown action type");
  }
};

export default TodoListContextProvider;
