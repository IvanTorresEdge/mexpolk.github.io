'use strict';

var Contact   = require('./contactInfo.jsx'),
    React     = require('react/addons');

module.exports = React.createClass({

  render: function () {
    return (
      <header id="header">
        <h1 className="text-uppercase">
          <span className="text-highlight">{this.props.me.firstName}</span>
          <span className="text-primary">{this.props.me.lastName}</span>
        </h1>
        <Contact contactInfo={this.props.me.contactInfo} />
        <hr className="visible-print-block" />
      </header>
    );
  }

});
