import React from 'react';
import {render} from 'react-dom';
// import  './style/main.css'
import Grid from "./components/Grid";
import Triqui from "./components/Triqui";

const App = () => {
    return (
    <div className="tictactoe">
        {/*<Grid></Grid>*/}
        {/*<Grid></Grid>*/}
        {/*<Grid></Grid>*/}
      <Triqui></Triqui>
        {/*<div className="row">*/}
        {/*    <div id="cell-1-0" data-row="1" data-column="0" className="cell"></div>*/}
        {/*    <div id="cell-1-1" data-row="1" data-column="1" className="cell"></div>*/}
        {/*    <div id="cell-1-2" data-row="1" data-column="2" className="cell"></div>*/}
        {/*</div>*/}
        {/*<div className="row">*/}
        {/*    <div id="cell-2-0" data-row="2" data-column="0" className="cell"></div>*/}
        {/*    <div id="cell-2-1" data-row="2" data-column="1" className="cell"></div>*/}
        {/*    <div id="cell-2-2" data-row="2" data-column="2" className="cell"></div>*/}
        {/*</div>*/}
    </div>
    )
}
render(
    <App/>,
    document.getElementById("app")
);
