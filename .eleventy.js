const path = require('path');
// const globby = require('globby');
const util = require('util')

const getDir = (name) => path.join('src', '11ty', name);

module.exports = eleventyConfig => {

    eleventyConfig.addFilter('dump', config => util.inspect(config));

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