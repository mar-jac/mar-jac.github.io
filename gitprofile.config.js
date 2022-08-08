// gitprofile.config.js

const config = {
  github: {
    username: 'mar-jac', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['mar-jac.github.io], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mar-jac',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://mar-jac.github.io',
    phone: '',
    email: 'mar.jacq0296@gmail.com',
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'Git',
    'Chef',
    'Chef Inspec',
    'CSS',
    'HTML',
    'Python',
    'Ruby',
    'Bash',
    'Linux',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Meta (Facebook, Inc.)',
      position: 'Aprrentice Systems Tech Engineer',
      from: 'March 2021',
      to: 'Present',
    },
    {
      company: 'CUNY Tech Prep',
      position: 'Software Engineer Intern',
      from: 'August 2020',
      to: 'May 2021',
    },
    {
      company: 'Brooklyn College',
      position: 'Technical Support Engineer',
      from: 'September 2018',
      to: 'March 2021',
    },
  ],
  education: [
    {
      institution: 'City University of New York (CUNY), Brooklyn College',
      degree: 'BS, Multimedia Computing',
      from: '',
      to: '2020',
    },
  ],
  
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
