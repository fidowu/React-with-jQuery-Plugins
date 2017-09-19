var React = require('react');

var InputDate = React.createClass({
    makedatepicker : function(element){

        $(element).datepicker({onSelect: this.handleDateChange, dateFormat: this.props.dateFormat})
    },

    handleDateChange : function(date) {
            this.props.handleDateChange(date, this.props.id)
    },
    render: function() {
        return  (
        	<div className="label-input">
       			<label for={this.props.id}>{this.props.label}</label>
        		<input ref={this.makedatepicker} type="text"  
        			id={this.props.id} value={this.props.value} />
        	</div>
        )
    }
});

var Calendar = React.createClass({
 
  
    render: function() {
        return (
                <InputDate id={this.props.id} 
                   handleDateChange={this.props.handleDateChange} 
                   dateFormat={this.props.dateFormat}
                   label={this.props.label}
                   value={this.props.value} />
        )
    }
});

module.exports = Calendar;