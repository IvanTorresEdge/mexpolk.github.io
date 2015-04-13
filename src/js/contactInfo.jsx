'use strict';

var _         = require('lodash'),
    Link      = require('./link.jsx'),
    React     = require('react/addons');

module.exports = React.createClass({

    render: function () {
      return (
        <section id="contact-info">
          <ul className="list-inline">
            {this.renderContact()}
          </ul>
        </section>
      );
    },

    renderContact: function () {
      return _.map(this.props.contactInfo, function (contact, i) {
        var className = ['fa', contact.icon].join(' ');

        return (
          <li key={i}>
            <i className={className}></i>
            &nbsp;
            <Link {...contact} />
          </li>
        );
      });
    }

});
