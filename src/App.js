import React from "react";
import ContextComponent from "./Pages/useContext";
import ReducerComponent from "./Pages/useReducer";

const renderReducerHook = () => {
  console.log("State hook pressed");
  return <ReducerComponent />;
};

const renderContextHook = () => {
  console.log("Context hook pressed");
  return <ContextComponent />;
};

const App = () => {
  return (
    <div className="box">
      {renderReducerHook()}
      {renderContextHook()}
    </div>
  );
};

export default App;
