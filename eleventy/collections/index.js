const htmlmin = require('html-minifier');

function addTransforms(eleventyConfig) {
  const env = process.env.ELEVENTY_ENV;

  eleventyConfig.addCollection('posts', function (collection) {
    return collection.getFilteredByGlob('./content/**/*.md').filter(function (item) {

      if (item.data.permalink) {
        if (env === 'prod' && item.data.draft === true) {
          return false
        }

        return true;
      }
    });
  });
}

module.exports = addTransforms;
