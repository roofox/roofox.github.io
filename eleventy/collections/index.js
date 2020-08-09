const htmlmin = require("html-minifier");

function addTransforms(eleventyConfig) {
  eleventyConfig.addCollection("posts", function (collection) {
    return collection
      .getFilteredByGlob("./content/**/*.md")
      .filter(function (item) {
        if (item.data.permalink) {
          if (process.env.ELEVENTY_ENV === "prod" && item.data.draft === true) {
            return false;
          }

          return true;
        }
      });
  });
}

module.exports = addTransforms;
