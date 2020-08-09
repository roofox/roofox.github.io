const htmlmin = require("html-minifier");

function addTransforms(eleventyConfig) {
  const env = process.env.ELEVENTY_ENV;

  if (env === "prod") {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        const minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
        });

        return minified;
      }

      return content;
    });
  }
}

module.exports = addTransforms;
