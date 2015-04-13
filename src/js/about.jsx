'use strict';

var React = require('react/addons');

module.exports = React.createClass({

  render: function () {
    return (
      <section id="about">
        <blockquote className="text-highlight">
          <p>{this.props.about}</p>
        </blockquote>
        <hr className="visible-print-block" />
      </section>
    );
  }

});
