'use strict';

var React = require('react/addons');

module.exports = React.createClass({

    render: function () {
      var css = {
        display: 'inline-block'
      };

      return (
        <div className="link text-overflow" style={css}>
          {this.renderLink()}
          <span className="visible-print-inline">{this.props.shorten ? this.props.shortUrl : this.props.url }</span>
        </div>
      );
    },

    renderIcon: function () {
      if (this.props.icon) {
        return (
          <span>
            <i className={'fa ' + this.props.icon} />
            &nbsp;
          </span>
        );
      }
    },

    renderLink: function () {
      if (this.props.url) {
        return (
          <a href={this.props.shortUrl || this.props.url} className="hidden-print text-overflow" target="_blank">
            {this.renderIcon()}
            {this.props.label || this.props.url || this.props.shortUrl}
          </a>
        );
      }
    }

});
