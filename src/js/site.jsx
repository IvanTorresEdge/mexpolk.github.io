'use strict';

var _     = require('lodash'),
    $     = require('jquery'),
    React = require('react/addons');

window.jQuery = $;    // Required by Boostrap
window.React = React; // Required for Developer Tools

var bootstrap = require('bootstrap-sass');

var data              = require('./data.js'),
    Header            = require('./header.jsx'),
    About             = require('./about.jsx'),
    Education         = require('./education.jsx'),
    Experience        = require('./experience.jsx'),
    ProgrammingSkills = require('./programmingSkills.jsx'),
    Tools             = require('./tools.jsx');

var Site = React.createClass({

  render: function () {
    return (
      <div className="container">
        <div className="col-xs-12 col-sm-12">
          <Header me={data.me} />
          <hr />
        </div>
        <div className="col-xs-12 col-sm-12">
          <About about={data.about} />
        </div>
        <div className="col-xs-12 col-sm-12">
          <Experience jobs={data.jobs} />
          <hr />
        </div>
        <section id="skills">
          <div className="col-xs-12 col-sm-12 text-muted">
            <h2 className="text-muted text-uppercase">Skills</h2>
          </div>
          <div className="col-xs-12 col-sm-8">
            <ProgrammingSkills programmingSkills={data.programmingSkills} />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Tools tools={data.tools} />
          </div>
        </section>
        <div className="col-xs-12 col-sm-12">
          <hr />
          <Education titles={data.education} />
        </div>
      </div>
    );
  }

});

React.render(<Site />, document.getElementById('site'));
