var React=require('react');
var createReactClass = require('create-react-class');
require('./css/additem.css');

//createComponent

var addItem=createReactClass({
    render:function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
            <input type="text" required ref="todoitem"/>
            <input type="submit" value="Hit me"/>
            </form>
        )
    },
    handleSubmit:function(e){
        e.preventDefault()
        this.props.onAdd(this.refs.todoitem.value)
        this.refs.todoitem.value='';
    }
})
module.exports=addItem;