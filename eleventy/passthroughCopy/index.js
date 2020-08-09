const globby = require("globby");

function addPassthroughCopy(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy({
    "node_modules/waypoints/lib/noframework.waypoints.min.js":
      "js/waypoints.min.js",
  });
}

module.exports = addPassthroughCopy;
