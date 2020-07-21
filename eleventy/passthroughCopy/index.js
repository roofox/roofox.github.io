const globby = require('globby');

function addPassthroughCopy(eleventyConfig) {

  let blogImages = globby.sync(['./content/blog/**/*.png', './content/blog/**/*.jpg']);

  blogImages = blogImages.reduce((acc, item) => { acc[item] = item.replace(/content\/blog\//g, ''); return acc; }, {});

  eleventyConfig.addPassthroughCopy(blogImages);
  eleventyConfig.addPassthroughCopy({
    './node_modules/prismjs/prism.js': 'js/prism.js'
  });
}

module.exports = addPassthroughCopy;