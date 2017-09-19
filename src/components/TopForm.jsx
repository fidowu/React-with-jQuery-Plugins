var React = require('react');
var LoftDiagram = require("./LoftDiagram");
var Calendar = require("./Calendar");
var DataTypes = require("./dataTypes");
var moment = require('moment');
var _ = require('underscore');

var TopForm = React.createClass({
  getInitialState : function() {
      return {
        startDate : moment().format("DD-MM-YYYY"),
        endDate : moment().format("DD-MM-YYYY"),

        chosenDataType: {},
        chosenPhase : ''
      }
  },
  handleChange: function(name, value){

      var arr = this.state.chosenDataType;
      var p;

      if (!value && arr.hasOwnProperty(name)) {

          p  = _.omit(arr, name);

      } else {

        arr[name] = value;

      }
      this.setState({chosenDataType: p || arr });

  },
  handleDateChange : function(date, field) {
  	
  	if (field == 'startDate')
  		this.setState({startDate : date});
  	else
  		this.setState({endDate : date});

  },
  handleLoftChange : function(data) {

      this.setState({chosenPhase : data});

  },

  render : function(){


      return (
          React.createElement("form", {id:"topform"},


               React.createElement("div", {id:'dateGroups'},

                   React.createElement(Calendar, {
                     id:'startDate',
                     label: 'Start:',
                     dateFormat:"dd-mm-yy" ,
                     value : this.state.startDate,
                     handleDateChange:this.handleDateChange}, null),

                    React.createElement(Calendar, {
                      id:'endDate',
                      label: 'End:',
                      dateFormat:"dd-mm-yy" ,
                      value : this.state.endDate,
                      handleDateChange:this.handleDateChange}, null),
              ),
               
             /* React.createElement(DataTypes, {handleChange:this.handleChange}, null), */

              React.createElement(LoftDiagram, {handleLoftChange: this.handleLoftChange}, null)


        )
      )
  }
});


module.exports = TopForm;