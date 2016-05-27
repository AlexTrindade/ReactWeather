var React = require('react');

var WeatherMessage = React.createClass({
  getMessage: function() {
    var {location, temp} = this.props;
    if (location === 'xx') {
      return <h3>Digite uma cidade</h3>
    } else {
      return <h3>It's {temp}°c in {location}.</h3>
    }
  },
  render: function() {
    return (
      this.getMessage()
    )
  }
});

module.exports = WeatherMessage;
