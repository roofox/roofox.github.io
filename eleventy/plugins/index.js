const path = require("path");

const remarkify = (plugin) => (options) => (markdownAST) => {
  const fn = require(plugin);
  fn({ markdownAST }, options);
};

function addPlugins(eleventyConfig) {
  eleventyConfig.addPlugin(require("@fec/eleventy-plugin-remark"), {
    plugins: [
      require("remark-footnotes"),
      [remarkify("gatsby-remark-prismjs"), { showLineNumbers: true }],
      [remarkify("gatsby-remark-smartypants"), { dashes: "oldschool" }],
    ],
  });

  /**
   * https://www.npmjs.com/package/eleventy-plugin-sass
   */
  eleventyConfig.addPlugin(require("eleventy-plugin-sass"), {
    watch: ["./src/styles/**/*.{scss,sass}", "!node_modules/**"], // The sass files you wish to compile (and watch when you serve)
    sourcemaps: process.env.ELEVENTY_ENV === "prod", // Add sourcemaps next to your sass files
    cleanCSS: process.env.ELEVENTY_ENV === "prod", // 	Runs the css trough cleanCSS
    cleanCSSOptions: {}, // 	Options to pass to cleanCSS
    autoprefixer: true, // Adds browser specific prefixes if needed (adheres to BrowserList)
  });

  eleventyConfig.addPlugin(require("eleventy-plugin-lazyimages"), {
    transformImgPath: (imgPath) => {
      if (imgPath.startsWith("/") && !imgPath.startsWith("//")) {
        const newPath = path.join(process.cwd(), imgPath);
        return newPath;
      }
      return imgPath;
    },
  });

  eleventyConfig.addPlugin(
    require("@hirusi/eleventy-plugin-safe-external-links"),
    {
      pattern: "https{0,1}://", // RegExp pattern for external links
      noopener: true, // Whether to include noopener
      noreferrer: true, // Whether to include noreferrer
      files: [
        // What output file extensions to work on
        ".html",
      ],
    }
  );
}

module.exports = addPlugins;
