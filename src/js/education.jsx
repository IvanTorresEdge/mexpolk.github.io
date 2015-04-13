'use strict';

var _     = require('lodash'),
    React = require('react/addons');

module.exports = React.createClass({

  render: function () {
    return (
      <section id="education">
        <h2 className="text-muted text-uppercase">Education</h2>
        <ul className="list-unstyled">
          {this.renderTitles()}
        </ul>
      </section>
    );
  },

  renderTitles: function () {
    return _.map(this.props.titles, function (title, i) {
      return (
        <li key={i}>
          <p>
            <span className="pull-right text-right">{title.year}</span>
            <strong className="text-overflow">{title.title}</strong>
            <br />
            <em className="text-overflow">{title.school}</em>
          </p>
        </li>
      );
    });
  }

});
