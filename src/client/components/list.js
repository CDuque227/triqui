import React, { Component } from 'react';
class ListItem extends Component {
    constructor(props) {
        console.log("props", props)
        super(props);
        this.state = {
            tasks: props.tasks || [],
        };
    }
    render() {
        const { tasks } = this.state;
        return (
            <ul>
                {tasks.map(task => <li>{task}</li>)}
            </ul>
        );
    }
}
export default ListItem;
