import React from 'react';
import {render} from 'react-dom';
import Triqui from "./components/Triqui";

const App = () => {
    return (
    <div className="tictactoe">
      <Triqui></Triqui>
    </div>
    )
}
render(
    <App/>,
    document.getElementById("app")
);
