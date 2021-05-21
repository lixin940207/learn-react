import React, {Component} from 'react';

class Todolist extends Component {

    state = {
        tasks: [
            {
                id: 1,
                name: "睡觉",
                finished: false,
            },
            {
                id: 2,
                name: "吃饭",
                finished: false
            }]
    }



    tickElement = (event) => {
        this.setState(!event.checked)
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <div className="todo-header">
                        <input onKeyDown={this.addElement} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                    </div>
                    <ul className="todo-main">
                        {
                            this.state.tasks.map((task) => {
                                return (
                                    <li key={task.id}>
                                        <label>
                                            <input type="checkbox" onChange={this.tickElement}
                                                   checked={task.finished}/>{task.name}
                                        </label>
                                        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="todo-footer">
                        <label>
                            <input type="checkbox"/>
                        </label>
                        <span>
                        <span>已完成0</span> / 全部2
                    </span>
                        <button className="btn btn-danger">清除已完成任务</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todolist;