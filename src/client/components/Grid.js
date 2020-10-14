import React, {Component} from 'react'

//commit
export default class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data_row: 0,
            value_item : 'x',
        }
    }
    render() {
        return(
            <div className="row">
                <div id="cell-0-0" data-row="0" data-column="0" className="cell"></div>
                <div id="cell-0-1" data-row="0" data-column="1" className="cell"></div>
                <div id="cell-0-2" data-row="0" data-column="2" className="cell"></div>
            </div>
        )
    }
}
