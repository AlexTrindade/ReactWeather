var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//           <Nav />
//           {this.props.children}
//           <Footer />
//       </div>
//     )
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav/>
      {props.children}
      <Footer />
    </div>
  );
}

module.exports = Main;
