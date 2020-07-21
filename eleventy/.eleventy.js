const path = require('path');
const setFilters = require('./filters');
const setLibraries = require('./library');
const addPlugins = require('./plugins');
const addPassthroughCopy = require('./passthroughCopy');

const getDir = (name) => path.join('src', '11ty', name);

module.exports = eleventyConfig => {

    // const env = process.env.ELEVENTY_ENV;
  
    setFilters(eleventyConfig);
    setLibraries(eleventyConfig);
    addPlugins(eleventyConfig);
    addPassthroughCopy(eleventyConfig);

    return {
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["md", "njk"],
        dir: {
            output: "dist",
            includes: getDir("includes"),
            data: getDir("data"),
        }
    };
};