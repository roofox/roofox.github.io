const path = require('path');
const setFilters = require('./filters');
const setLibraries = require('./library');
const addPlugins = require('./plugins');
const addTransforms = require('./transforms');
const addCollections = require('./collections');
const addPassthroughCopy = require('./passthroughCopy');

const getDir = (name) => path.join('src', '11ty', name);

module.exports = eleventyConfig => {
  
    addPassthroughCopy(eleventyConfig);
    setFilters(eleventyConfig);
    setLibraries(eleventyConfig);
    addPlugins(eleventyConfig);
    addTransforms(eleventyConfig);
    addCollections(eleventyConfig);

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