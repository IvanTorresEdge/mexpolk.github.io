'use strict';

module.exports = {

  me: {
    firstName: 'Ivan',
    lastName: 'Torres',
    title: 'Software Developer',
    contactInfo: [
      {
        label: 'LinkedIn',
        icon: 'fa-linkedin',
        url: 'https://linked.in/in/mexpolk'
      },
      {
        label: 'Github',
        icon: 'fa-github',
        url: 'https://github.com/mexpolk'
      },
      {
        label: 'Twitter',
        icon: 'fa-twitter',
        url: 'https://twitter.com/mexpolk'
      }
    ]
  },

  about: {
    description: 'Seasoned, highly motivated, software developer/leader/manager with a heavy focus in code quality, design, and user experience with a pragmatic approach.'
  },

  jobs: [
    {
      company: 'Sprinklr',
      title: 'Engineering Manager, FPX',
      link: {
        url: 'https://sprinklr.com'
      },
      start: '2015-04-01',
      goals: [
        {
          title: 'Sprinklr Acquires Get Satisfaction',
          type: 'promotion',
          date: '2015-04-01',
          link: {
            label: 'Read article',
            url: 'http://techcrunch.com/2015/04/08/sprinklr-buys-get-satsifaction-to-add-customer-feedback-to-its-social-media-platform',
            shortUrl: 'http://tcrn.ch/1DAbHxA',
            shorten: true
          }
        }
      ]
    },
    {
      company: 'Get Satisfaction',
      title: 'Engineering Manager, Business Applications',
      link: {
        url: 'https://getsatisfaction.com'
      },
      start: '2011-04-01',
      end: '2014-03-31',
      goals: [
        {
          title: 'Manage Workspace',
          type: 'release',
          date: '2013-08-13',
          link: {
            label: 'Read article',
            url: 'https://getsatisfaction.com/getsatisfaction/topics/introducing_manage_workspace_the_new_application_for_business_users',
            shortUrl: 'http://bit.ly/1PfuZ3Q',
            shorten: true
          },
          description: 'The core application for community managers at Get Satisfaction. After 3 years, with Manage Workspace community managers have the ability to perform advanced queries to find, read, respond, and moderate conversations. Manage users and categories. Query the gamification leaderboard to identify community champions, among other common tasks. Probably the most complete tool in the industry. Proudly, Manage Workspace is the product of a hack day project of mine.',
          stack: [
            'React.js', 'Backbone.js', 'Express.js', 'Node.js', 'Rails API'
          ]
        },
        {
          title: 'Promoted to Engineering Manager, Business Applications',
          type: 'promotion',
          date: '2013-6-1'
        },
        {
          title: 'Getting Started (retired)',
          type: 'release',
          date: '2012-12-18',
          link: {
            label: 'Read article',
            url: 'https://getsatisfaction.com/getsatisfaction/topics/new_product_getting_started_with_your_community_has_just_become_a_whole_lot_easier',
            shortUrl: 'http://bit.ly/1DAbM4D',
            shorten: true
          },
          description: 'In the early days of Get Satisfaction, self service was big part of our business model. Therefore having an application that helped our customers to setup their community easily was key. Getting Started was the application which did just that, taking the users through a checklist to get their community up and running.',
          stack: [
            'Backbone.js', 'Express.js', 'Node.js', 'Rails API'
          ]
        },
        {
          title: 'Promoted to Team Lead, Business Applications',
          type: 'promotion',
          date: '2012-6-1'
        },
        {
          title: 'Engage Widgets',
          type: 'release',
          link: {
            label: 'Read article',
            url: 'http://blog.getsatisfaction.com/2012/05/01/get-satisfaction-engage-social-conversations-anywhere-your-customers-are',
            shortUrl: 'http://bit.ly/1yOcHCH',
            shorten: true
          },
          date: '2012-5-1',
          description: 'As part of our Get Satisfaction Everywhere strategy, Engage Widgets is a key component which allows companies to embed their Get Satisfaction community where their customers are (website, blog, etc). I served as technical lead, architect, and backend developer.',
          stack: [
            'Backbone.js', 'Rails API'
          ]
        }
      ]
    },
    {
      company: 'Freshout Media',
      title: 'Sr. Backend Developer',
      link: {
          label: 'http://freshout.us',
          url: 'http://freshout.us',
          shortUrl: 'http://bit.ly/1Fdjlnc'
      },
      start: '2009-8-1',
      end: '2011-4-1',
      goals: [
        {
          title: 'Empowerkit',
          type: 'release',
          date: '2011-1-1',
          link: {
            label: 'http://empowerkit.com',
            url: 'http://empowerkit.com',
            shortUrl: 'http://bit.ly/hJH1lX'
          },
          description: 'Innovative platform for the MLM industry that provides easy to use tools for website design, content management, integrated blog and social media services, SEO, brand and content control to their distributors and customers. Member of the core team responsible of building the tools for site administration and moderation of content (full-stack).',
          stack: [
            'Ruby on Rails', 'JavaScript', 'MySQL', 'MongoDB'
          ]
        },
        {
          title: 'TweetyJobs (retired)',
          type: 'release',
          date: '2009-12-1',
          description: 'Innovative platform for the MLM industry that provides easy to use tools for website design, content management, integrated blog and social media services, SEO, brand and content control to their distributors and customers. Built the integration with Twitter to process messages as commands to schedule job searches and/or job seekers using tweets as commands (backend).',
          stack: [
            'Ruby on Rails', 'JavaScript', 'MySQL', 'MongoDB'
          ]
        },
      ]
    },
    {
      company: 'Häika Network, S.A.',
      title: 'Contractor',
      link: {
        label: 'http://haikanetwork.com',
        url: 'http://haikanetwork.com',
        shortUrl: 'http://bit.ly/1HUaWFR'
      },
      start: '2008-1-1',
      end: '2012-7-1',
      goals: [
        {
          title: 'Häika Network ERP',
          type: 'release',
          date: '2009-7-1',
          description: 'Built the entire SAAS based - multi-tenant - ERP from scratch using Ruby on Rails. The application includes POS, digital invoicing, stock management, purchase orders, expense control, and accounting.',
          stack: [
            'Ruby on Rails', 'Haml', 'Sass', 'jQuery', 'MySQL'
          ]
        }
      ]
    },
    {
      company: 'Vallarta Adventures',
      title: 'Contractor',
      link: {
        label: 'http://vallarta-adventures.com',
        url: 'http://vallarta-adventures.com',
        shortUrl: 'http://bit.ly/1ErwJFk'
      },
      start: '2008-12-1',
      end: '2012-7-1',
      goals: [
        {
          title: 'Call-Center Reservation System',
          type: 'release',
          date: '2008-11-1',
          description: 'High demand call center / e­commerce reservation system with credit card processing and event/tour planning, integrated with SAP-One.',
          stack: [
            'C#', 'CSLA', 'Ruby on Rails', 'jQuery', 'SQL Server'
          ]
        }
      ]
    },
    {
      company: 'Benedetti\'s Pizza',
      title: 'Contractor',
      link: {
        label: 'http://benedettis.com/',
        url: 'http://benedettis.com/',
        shortUrl: 'http://bit.ly/1FdNnqP'
      },
      start: '2008-4-1',
      end: '2008-5-1',
      goals: [
        {
          title: 'Franchiser\'s Purchase Order Management Application',
          type: 'release',
          date: '2008-5-1',
          description: 'Online Web application to process purchase orders from all their franchises country wide, integrated with SAP-One.',
          stack: [
            'C#', 'ASP.NET', 'CSLA'
          ]
        }
      ]
    },
    {
      company: 'Bansí',
      title: 'Lead Developer',
      link: {
        label: 'http://www.bansi.com/',
        url: 'http://www.bansi.com/',
        shortUrl: 'http://bit.ly/1bivew2'
      },
      start: '2001-11-1',
      end: '2007-7-1',
      goals: [
        {
          title: 'Electronic Transfer of Funds (TEF) - National Automated Clearing House (SICAM)',
          type: 'release',
          description: 'This service allows payments among customers of different banks to be made electronically. Customers can place orders at their own banks for a fund transfer to any third party holding a bank account at any bank. The transfer can be made on the date t+1 or t+2 for any amount. TEF operations are settled at SICAM.',
          stack: [
            'Visual Basic 6.0', 'Win32 API', 'COM+'
          ]
        },
        {
          title: 'Electronic Exchange of Cheques - National Automated Clearing House (SICAM)',
          type: 'release',
          description: 'Application for digitization of cheques, capable of processing up to 90 documents per minute. This application was also responsible of transmitting all the images and reports to SICAM, to facilitate settlement against other banks.',
          stack: [
            'Visual Basic 6.0', 'Win32 API', 'COM+', 'NCR High Speed Check Scanners'
          ]
        }
      ]
    }
  ],

  education: [
    {
      title: 'B.A. Marketing Management & International Business',
      school: 'Universidad del Valle de Atemajac (UNIVA)',
      year: 1999
    },
    {
      title: 'Associate Degree in Software Engineering',
      school: 'Universidad del Valle de Atemajac (UNIVA)',
      year: 1994
    },
    {
      title: 'Technical Degree in Electronics',
      school: 'Anahuac Garibaldi',
      year: 1990
    },
    {
      title: 'Unified Modeling Language Fundamentals',
      school: 'Instituto Tecnológico de Estudios Superiores de Monterrey (TEC)',
      year: 2005
    },
    {
      title: 'Administration of Information Projects',
      school: 'Instituto Tecnológico de Estudios Superiores de Monterrey (TEC)',
      year: 2004
    },
    {
      title: 'Advanced SQL Using IBM Informix',
      school: 'IBM Informix Education Services, Executrain',
      year: 2002
    },
    {
      title: 'Developing Applications Using IBM Informix 4GL',
      school: 'IBM Informix Education Services, Executrain',
      year: 2002
    },
    {
      title: 'Advanced Informix 4GL',
      school: 'IBM Informix Education Services, Executrain',
      year: 2002
    }
  ],

  programmingSkills: [
    {
      type: 'frontend',
      name: 'HTML 5',
      level: 'expert'
    },
    {
      type: 'frontend',
      name: 'CSS (Sass/Less)',
      level: 'expert'
    },
    {
      type: 'frontend',
      name: 'JavaScript',
      level: 'expert'
    },
    {
      type: 'frontend',
      name: 'CoffeeScript',
      level: 'expert'
    },
    {
      type: 'frontend',
      name: 'Backbone.js/Marionette.js',
      level: 'expert'
    },
    {
      type: 'frontend',
      name: 'React.js',
      level: 'advanced'
    },
    {
      type: 'frontend',
      name: 'Bootstrap',
      level: 'advanced'
    },
    {
      type: 'backend',
      name: 'Node.js',
      level: 'advanced'
    },
    {
      type: 'backend',
      name: 'Express.js',
      level: 'advanced'
    },
    {
      type: 'backend',
      name: 'Ruby',
      level: 'advanced'
    },
    {
      type: 'backend',
      name: 'Ruby on Rails',
      level: 'advanced'
    },
    {
      name: 'MySQL, PostgreSQL',
      type: 'storage',
      level: 'advanced'
    }
  ],

  tools: [
    {
      name: 'Linux',
      type: 'programming',
      level: 'advanced'
    },
    {
      name: 'Vim',
      type: 'programming',
      level: 'expert'
    },
    {
      name: 'Git',
      type: 'programming',
      level: 'expert'
    },
    {
      name: 'Sketch',
      type: 'design',
      level: 'advanced'
    },
    {
      name: 'Photoshop',
      type: 'design',
      level: 'intermediate'
    },
    {
      name: 'Illustrator',
      type: 'design',
      level: 'advanced'
    }
  ]

};
