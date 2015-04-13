'use strict';

var _     = require('lodash'),
    React = require('react/addons');

module.exports = React.createClass({

  render: function () {
      return (
        <section id="tool-skills">
          <h4>Favorite Tools</h4>
          {this.renderChart()}
        </section>
      );
  },

  renderChart: function () {
      return (
        <div className="chart chart-bar">
          {this.renderSkills()}
        </div>
      );
  },

  renderSkills: function () {
    return _.map(this.props.tools, function (skill) {
      var className = React.addons.classSet({
        'col-xs-6'             : true,
        'col-sm-6'             : true,
        'level'                : true,
        'level-beginner'       : skill.level === 'beginner',
        'level-intermediate'   : skill.level === 'intermediate',
        'level-advanced'       : skill.level === 'advanced',
        'level-expert'         : skill.level === 'expert',
        'text-right'            : true
      });

      return (
        <div className="skill row">
          <div className="col-xs-6 col-sm-6">
            {skill.name}
          </div>
          <div className={className}>
            {
              _.times(4, function () {
                return (
                    <i className="fa fa-circle" />
                );
              })
            }
          </div>
        </div>
      );
    });
  }
});
