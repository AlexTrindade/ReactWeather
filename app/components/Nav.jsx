var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">My Brand!</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather!</IndexLink></li>
                <li><Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                <li><Link to="/examples" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
              </ul>
            </div>
          </div> {/* Fim do container*/}

        </div>
      </nav>
    )
  }
});

module.exports = Nav;
