var lodash = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');

var Row = React.createClass({

    onClick : function(e){

        this.props.handleChange(e.target.name, e.target.checked);
    },
    render : function(){

      return (
        React.createElement('div', {className : 'row-datatypes'},

              React.createElement('label', { style: {width: '65px', display: 'inline-block'}},
                       React.createElement('span', null, this.props.l)
                    ),
                
    	         
               React.createElement('label', { 'for': this.props.l },
                       React.createElement('input', { type: 'checkbox', name: this.props.l + "_average", id: this.props.l + "_average", onClick: this.onClick }),
                       ' ',
                       React.createElement('span', null, "Average")
                    ),

                React.createElement('label', { 'for': this.props.l },
                       React.createElement('input', { type: 'checkbox', name: this.props.l + "_percentiles", id: this.props.l + "_percentiles", onClick: this.onClick }),
                       ' ',
                       React.createElement('span', null, "Percentiles")
                    ),

                React.createElement('label', { 'for': this.props.l },
                       React.createElement('input', { type: 'checkbox', name: this.props.l + "_std_dev", id: this.props.l + "_std_dev", onClick: this.onClick }),
                       ' ',
                       React.createElement('span', null,  "2/3 STD Dev.")
                    ),
    	        ) 
      )
    }
})


var DataTypes = React.createClass({

  getInitialState() {
    return {
      dataType: ["Actual", "Plan", "Variance"],
    }
  },
  handleChange: function(name, value){
     this.props.handleChange(name, value);
  },
  render : function() {
    return (
        <div  id='dataTypes'>
            {this.state.dataType.map(function(l, v){

              return (
                          <Row l={l} v={v}   handleChange={this.handleChange}/>
                  )
              }, this)}
        </div>

    );
  }
});


module.exports = DataTypes;
