'use strict';

var _     = require('lodash'),
    React = require('react/addons');

module.exports = React.createClass({

  render: function () {
    return (
      <section id="programming-skills">
        <h4>Relevant Programming Skills</h4>
        {this.renderChart()}
      </section>
    );
  },

  renderChart: function () {
    return (
      <div className="row">
        {this.renderSkills()}
      </div>
    );
  },

  renderSkills: function () {
    return _.map(this.props.programmingSkills, function (skill) {
      var className = React.addons.classSet({
        'col-xs-6'             : true,
        'col-sm-6'             : true,
        'level'                : true,
        'level-beginner'       : skill.level === 'beginner',
        'level-intermediate'   : skill.level === 'intermediate',
        'level-advanced'       : skill.level === 'advanced',
        'level-expert'         : skill.level === 'expert',
        'text-right'           : true
      });

      return (
        <div className="skill col-xs-12 col-sm-6">
          <div className="row">
            <div className="col-xs-6 col-sm-6">
              <small className="text-overflow">{skill.name}</small>
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
        </div>
      );
    });
  }
});
