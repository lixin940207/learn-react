import React, {Component} from 'react';
import  './index.css'
import PropTypes from "prop-types";

class Item extends Component {
    state = {mouse:false}

    static propTypes ={
        changeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck = (event)=>{
        var {id} = this.props
        this.props.changeTodo(id, event.target.checked)
    }

    handleDelete = ()=> {
        if(window.confirm("确定吗？")) {
            var {id} = this.props
            this.props.deleteTodo(id)
        }
    }

    render() {
        var {name, finished} = this.props
        const {mouse} = this.state
        return (
            <div>
                <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" onChange={this.handleCheck}
                               checked={finished}/>{name}
                    </label>
                    <button onClick={this.handleDelete} className="btn btn-danger" style={{display: mouse ? true : 'none'}}>删除</button>
                </li>
            </div>
        );
    }
}

export default Item;