'use strict';

var _      = require('lodash'),
    Link   = require('./link.jsx'),
    moment = require('moment'),
    React  = require('react/addons');

var format    = 'MMM YYYY';

module.exports = React.createClass({

  render: function () {
    return (
      <section id="experience">
        <h2 className="text-muted">Experience</h2>
        {this.renderJobs()}
      </section>
    );
  },

  renderDescription: function (goal) {
    if (goal.description) {
      return <p className="text-justify">{goal.description}</p>
    }
  },

  renderGoalDate: function (goal) {
    if (goal.date) {
      return (
        <small className="pull-right text-muted text-right">
          {moment(goal.date).format(format)}
        </small>
      );
    }
  },

  renderGoals: function (goals) {
    return _.map(goals, function (goal, i) {
      return (
        <article className="goal row" key={i}>
          <div className="col-xs-11 col-xs-offset-1 col-sm-11 col-sm-offset-1">
            <h4 className="goal-title">
              {this.renderGoalDate(goal)}
              {this.renderGoalTitle(goal)}
            </h4>
            {this.renderDescription(goal)}
            {this.renderStack(goal)}
          </div>
        </article>
      );
    }.bind(this));
  },

  renderGoalTitle: function (goal) {
    return (
      <span>
        <h4 className="text-overflow">
          {this.renderGoalTitleIcon(goal)}
          &nbsp;
          {goal.title}
        </h4>
        {this.renderGoalLink(goal)}
      </span>
    );
  },

  renderGoalLink: function (goal) {
    if (goal.link) {
      return (
        <small><Link {...goal.link} /></small>
      );
    }
  },

  renderGoalTitleIcon: function (goal) {
    var className = React.addons.classSet({
      'fa': true,
      'fa-star': goal.type === 'promotion',
      'fa-rocket': goal.type === 'release'
    });

    return (
      <small><i className={className} /></small>
    );
  },

  renderJobs: function () {
    return _.map(this.props.jobs, function (job, i) {
      return (
        <article className="job" key={i}>
          <h3 className="text-overflow">
            {job.company}
            <br />
            <small>{job.title}</small>
          </h3>
          <p>
            <Link {...job.link} />
            <br />
            <small>
              {moment(job.start).format(format)}
              &nbsp;-&nbsp;
              {job.end ? moment(job.end).format(format) : 'Present'}
            </small>
          </p>
          {this.renderGoals(job.goals)}
        </article>
      );
    }.bind(this));
  },

  renderIcon: function (goal) {
    var className = 'goal-icon hidden-print text-muted fa ';
    className += goal.type === 'release' ? 'fa-rocket' : 'fa-star'
    return (<i className={className} />);
  },

  renderStack: function (goal) {
    if (goal.stack && goal.stack.length) {
      return (
        <ul className="list-inline">
          {
            _.map(goal.stack, function (tech, i) {
              return (
                <li key={i}>
                  <span className="label label-default">{tech}</span>
                </li>
              );
            }.bind(this))
          }
        </ul>
      );
    }
  }

});
