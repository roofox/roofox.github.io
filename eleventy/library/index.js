const getMarkdownInstance = require('./markdown');

function setLibraries(eleventyConfig) {

  eleventyConfig.setLibrary("md", getMarkdownInstance());
}

module.exports = setLibraries;