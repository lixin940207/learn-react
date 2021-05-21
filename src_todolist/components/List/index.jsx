import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import PropTypes from "prop-types";

class List extends Component {

    static propTypes ={
        tasks: PropTypes.array,
        changeTodo: PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <ul className="todo-main">
                {
                    this.props.tasks.map((task) => {
                        return (
                            <Item key={task.id} {...task} changeTodo={this.props.changeTodo} deleteTodo={this.props.deleteTodo}/>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default List;