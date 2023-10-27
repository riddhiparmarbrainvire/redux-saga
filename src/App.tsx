import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.myFirstReducer);

  return (
    <>
      <button onClick={() => dispatch(getUsersFetch())}>click me</button>
      <div className="App">
        users:
        {users.users?.map((user: any) => (
          <div>{user.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
