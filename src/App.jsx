import { useContext, useState } from "react";
import "./App.css";
import { TodoListContext } from "./TodoListContext";

function App() {
  // värdet i input
  const [input, setInput] = useState("");
  // list är todolistan, dispatch funktionen som förändrar den.
  const { list, dispatch } = useContext(TodoListContext);
  const todoListElements = list.map((listItem, idx) => (
    <li key={idx}>{listItem}</li>
  ));
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            //här kör vi actionen added och skickar med det som finns i input.
            type: "added",
            payload: input,
          });
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>{todoListElements}</ul>
    </div>
  );
}

export default App;
