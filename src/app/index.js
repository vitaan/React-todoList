var React=require('react');
var ReactDOM=require('react-dom');
require('./css/index.css');

//Module require
var TodoItem=require('./todoitem');
var AddItem=require('./AddItem');

// Create Component

var TodoComponent= React.createClass({
    getInitialState: function(){
        return{
            todos:['eat some food','take a nap','work','buy'] 
         
        }
    },
    render: function(){
        var todos= this.state.todos;
        todos=todos.map(function(item,index){
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
            <div id="todo-list">
            <p>ToDo-List</p>
            <ul>
             {todos}
            </ul>
            <AddItem onAdd={this.onAdd}/>
            </div>
        );
    },//render

    //Custom functions
    onDelete: function(item){
        var updatedTodos= this.state.todos.filter(function(val,index){
            return item!==val;
        });
        this.setState({
            todos:updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos=this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        });
    }
});

//put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));