var React=require('react');
var createReactClass = require('create-react-class');
require('./css/todoitem.css');

//createTodoItemComponent
var TodoItem=createReactClass({
    render:function(){
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.deleteItem}>X</span>
                </div>
            </li>
        )
    },
    //customFunctionForEvents
    deleteItem:function(){
        this.props.onDelete(this.props.item)
    }
})

module.exports=TodoItem;