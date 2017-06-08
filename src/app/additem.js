var React=require('react');
require('./css/additem.css')

var AddItem= React.createClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="new"/>
                <input type="submit" value="Enter"/>
            </form>
        );
    },

    //custom functions

    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.new.value);
    }
});


module.exports=AddItem;