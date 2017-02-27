const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: [
        'last 2 versions',
        '> 5%',
        'not ie <= 8',
      ],
    }),
  ],
};

