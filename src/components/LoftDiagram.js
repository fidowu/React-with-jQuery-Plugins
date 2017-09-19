var React = require('react');

var LoftDiagram = React.createClass({

    handleLoftChange : function(data){

        this.props.handleLoftChange(data);

    },
    componentDidMount : function() {
      let thisJsx = this;

      let options = {
            credits : false,
            chart: {
                renderTo: 'phaseFlight',
                margin:[0,0,0,0]
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            label :{},
            xAxis: {
                labels: {
                        enabled: false
                },
                plotBands: [{ 
                    color: '#0000CD',
                    from: 0,
                    to: 1.5,
                    label: {
                        text: 'At Gate',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },{
                    color: '#0000CD',
                    from: 1.5,
                    to: 2.5,
                    label: {
                        text: 'Taxi Out',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },{
                    color: '#0000CD',
                    from: 2.5,
                    to: 3.5,
                    label: {
                        text: 'TakeOff',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                }, {
                    color: '#0000CD',
                    from: 3.5,
                    to: 4.5,
                    label: {
                        text: 'Climb',
                        style: {
                            color: '#FFFFFF'
                        }
                    }                    
                }, {
                    color: '#0000CD',
                    from: 4.5,
                    to: 5.5,
                    label: {
                        text: 'Cruise',
                        style: {
                            color: '#FFFFFF'
                        }
                    }

                },{
                    color: '#0000CD',
                    from: 5.5,
                    to: 6.5,
                    label: {
                        text: 'Descent',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },{

                    color: '#0000CD',
                    from: 6.5,
                    to: 7.5,
                    label: {
                        text: 'Hold',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },{

                    color: '#0000CD',
                    from: 7.5,
                    to: 8.5,
                    label: {
                        text: 'Approach',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },{

                    color: '#0000CD',
                    from: 8.5,
                    to: 9.5,
                    label: {
                        text: 'Taxi in',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                },{
                    color: '#0000CD',
                    from: 9.5,
                    to: 10.5,
                    label: {
                        text: 'Reserve',
                        style: {
                            color: '#FFFFFF'
                        }
                    }
                }],
                tickInterval: 0
            },
            yAxis: {
                labels: {enabled: false},
                gridLineWidth: 0,
                title: { text: ''},
                plotBands: [{ 
                    color: ' #FFFFFF',
                    from: 0,
                    to: 3.25
                }],
                minorTickInterval: 1
            },
            tooltip:{
                    formatter : function() {
                        if (!this.point.name){
                            return false
                        }
                        return this.point.name
                    }
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                    series: {

                        point : {

                            events :{
                                click: function(event) {

                                    if (typeof(this.name) !== 'undefined') {
                                            console.log(this.name)
                                            thisJsx.handleLoftChange(this.name)
                                    }
                                    
                                },
                                mouseover: function(event) {

                                    console.log(this.marker)
                                } 
                             }
                        }

                },
            },
            series: [{
                type: 'spline',
                marker :  {
                    fillColor: '#00FFFF',
                    lineWidth: 2,
                    lineColor: '#000000'
                },
                 
                data: [
                    {x: 0, y :1, marker: {enabled : false}},
                    {x: 0.5,  y :1,    marker: {enabled : false}},
                    {x: 1, y :1,  marker: {enabled : true}, name:'Additional Fuel', id: '1'},
                    {x: 1.5, y :1,  marker: {enabled : false}},
                    {x: 2, y :1,  marker: {enabled : false}},
                    {x: 2, y :1,  marker: {enabled : true},  name:'Taxi Out', id: '2'},
                    {x: 2.5, y :1,  marker: {enabled : false}},
                    {x: 3, y :1.5,  marker: {enabled : false}},
                    {x: 3.5, y :2.0,  marker: {enabled : false}},


                    {x: 4, y :2.5,  marker: {enabled : true}, name:'Climb', id: '3'},
                    {x: 4.5, y :3.0,  marker: {enabled : false}},

                    {x: 5, y :3.0,  marker: {enabled : true}, name:'Cruise Altitude', id:'4'},
                    {x: 5.5, y :3.0,  marker: {enabled : false}},
                    {x: 6, y :3.0,  marker: {enabled : true}, name:'Cruise Performance', id:'5'},
                    {x: 6.5, y :3.0,  marker: {enabled : false}},


                    {x: 7, y :2.5,  marker: {enabled : true}, name:'Descent', id:'6'},
                    {x: 7.5, y :2.0,  marker: {enabled : false}},

                    {x: 8, y :2.0,  marker: {enabled : true}, name:'Hold', id:'7'},
                    {x: 8.5, y :2.0,  marker: {enabled : false}},

                    {x: 9, y :1.5,  marker: {enabled : false}},
                    {x: 9.5, y :1.0,  marker: {enabled : false}},

                    
                    {x: 10, y :1.0,  marker: {enabled : false}},

                    {x: 10.5, y :1.0,  marker: {enabled : false}}
                   

               ],
        }]

    }

        var chart = new Highcharts.Chart(options);

    },
    render : function(){

      return (
             React.createElement("div", {id:'phaseFlight'}, null)

      )
    }

});

module.exports = LoftDiagram;
