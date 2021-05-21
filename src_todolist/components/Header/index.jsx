import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.css'
import {nanoid} from "nanoid";

class Header extends Component {
    static propTypes ={
        addTodo: PropTypes.func.isRequired
    }
    addElement = (event) => {
        const {keyCode, target} = event
        if (keyCode === 13)
        {
            if (target.value.trim() === ''){
                alert("不能为空")
                return
            }
            const newTask = {
                id: nanoid(),
                name: target.value,
                finished: false
            }
            this.props.addTodo(newTask)
            target.value = ''
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.addElement} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;