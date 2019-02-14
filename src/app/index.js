var React=require('react');
var ReactDOM=require('react-dom');
var createReactClass = require('create-react-class');
import{BrowserRouter as Router, Route, Link} from 'react-router-dom'

//requireModules
var TodoItem=require('./todoItem')
var AddItem=require('./additem')
var About=require('./about')
require('./css/index.css');

var  App =createReactClass({
    render:function(){
       
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                    </ul>
                <Route path='/' exact strict component={TodoComponent}></Route>
                <Route path='/about' exact strict component={About}></Route>
                {/* <Route path='/Home' component={TodoComponent}></Route> */}
                </div>
            </Router>
        )
    }
})

//createComponent

var TodoComponent =createReactClass({
    getInitialState:function(){
        return {todos :['apple','eat','work','buy']}
    },
    
    render:
   
    function(){
        if(this.state.username==undefined){
            return(
                <div>
                <form id="add-todo" onSubmit={this.WelcomeFunction}>
                <input type="text" required placeholder="please enter your name" ref="username" />
                <input type="submit" value="Submit"/>
                </form>
                </div>
            )
        }
        else{
            var todos=this.state.todos;
            var todosmap=todos.map(function(item,index){
                return (<TodoItem item={item} key={index} onDelete={this.onDelete}/>)
            }.bind(this))
            return (            
                <div id='todo-list'>
                <h2>Welcome {this.state.username},</h2>
                <p>ToDo List</p>
                <ul>{todosmap}</ul>
                
                <AddItem  onAdd={this.onAdd}/>
                </div>
            )  
        }
        
    },
    
    //customFunction
    onDelete:function(deletedItem){
        var updatedTodo=this.state.todos.filter(function(item,index){
            return item!==deletedItem
        });
        this.setState({
            todos:updatedTodo
        });
    },
    onAdd:function(item){
        var updatedTodo=this.state.todos;
        updatedTodo.push(item);
        this.setState({
            todos:updatedTodo
        })
    } ,
    WelcomeFunction:function(){
        this.setState({
            username:this.refs.username.value
        })
    },
    //componentLifeCycleFunctions
    // componentWillMount:function(){
    //     console.log("componentWillmount")
    // }, 
    // componentDidMount:function(){
    //     console.log("componentDidmount")
    // }, 
    // componentWillUpdate:function(){
    //     console.log("componentWillUpdate")
    // } 
})


//addCompnentToHtmlPage

ReactDOM.render(<App />,document.getElementById('todo-wrapper'))

module.exports.TodoComponent=TodoComponent;