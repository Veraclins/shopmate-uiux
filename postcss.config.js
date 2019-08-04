/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './*.html',
    './**/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss,
    cssnano,
    autoprefixer,
    purgecss,
  ],
};
