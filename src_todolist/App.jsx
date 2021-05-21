// 创建外壳组件
import React, {Component} from 'react'
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component{
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

    addTodo = (taskObj) => {
        let {tasks} = this.state
        this.setState({tasks: [taskObj, ...tasks]})
    }

    changeTodo = (id, finished) => {
        const {tasks} = this.state
        const newTasks = tasks.map((taskObj) => {
            if(taskObj.id===id){
                return {...taskObj, finished:finished}
            }
            else{
                return taskObj
            }
        })
        this.setState({tasks: newTasks})
    }

    deleteTodo = (id)=>{
        const {tasks} = this.state
        const newTasks = tasks.filter((taskObj)=>{
            return taskObj.id !== id
        })
        this.setState({tasks: newTasks})
    }

    clearAllFinished = ()=>{
        const {tasks} = this.state
        const newTasks = tasks.filter((taskObj)=>{
            return !taskObj.finished
        })
        this.setState({tasks: newTasks})
    }

    tickAll = (finished)=>{
        const {tasks} = this.state
        const newTasks = tasks.map((taskObj)=>{
            return {...taskObj, finished}
        })
        this.setState({tasks: newTasks})
    }

    render(){
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                        <Header addTodo={this.addTodo} />
                        <List tasks={this.state.tasks} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
                        <Footer tasks={this.state.tasks} clearAllFinished={this.clearAllFinished} tickAll={this.tickAll}/>
                </div>
            </div>
        )
    }
}