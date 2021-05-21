import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

    clearAllFinished = () => {
        this.props.clearAllFinished()
    }

    tickAll = (event) => {
        this.props.tickAll(event.target.checked)
    }

    render() {
        const {tasks} = this.props
        const finished_len = tasks.filter((taskObj)=>{return taskObj.finished}).length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={finished_len===tasks.length && tasks.length!==0} onChange={this.tickAll}/>
                </label>
                <span>
                            <span>已完成{finished_len}</span>
                            / 全部{tasks.length}
                        </span>
                <button className="btn btn-danger" onClick={this.clearAllFinished}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;